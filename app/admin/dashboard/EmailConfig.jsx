'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill so it loads only on the client
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';

// Available email template types as keys in your JSON config
const EMAIL_TEMPLATES = {
    confirmationEmail: 'Confirmation Email',
  followUpEmail: 'Offer Letter Email',
  sevenDayCallbackEmail: 'Callback Email'
};

export default function EmailConfig() {
  // Default values if config is not loaded yet
  const defaultScheduleDays = 3;
  const defaultEmailHtml = "<p>Your email content here...</p>";

  // Entire config fetched from the API
  const [configData, setConfigData] = useState(null);
  // Which email template is currently selected
  const [selectedTemplate, setSelectedTemplate] = useState('confirmationEmail');
  // Values for the currently selected template
  const [scheduleDays, setScheduleDays] = useState(defaultScheduleDays);
  const [emailHtml, setEmailHtml] = useState(defaultEmailHtml);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/email-config');
        const data = await res.json();
        setConfigData(data);
        // Load initial template (assume followUpEmail exists)
        if (data.followUpEmail) {
          setScheduleDays(data.followUpEmail.scheduleDays ?? defaultScheduleDays);
          setEmailHtml(data.followUpEmail.html ?? defaultEmailHtml);
        }
      } catch (error) {
        console.error("Failed to fetch config:", error);
      }
    }
    fetchConfig();
  }, []);

  // Switch the editor to the chosen email template
  const handleTemplateSwitch = (templateKey) => {
    setSelectedTemplate(templateKey);
    if (configData && configData[templateKey]) {
      const template = configData[templateKey];
      // Only set scheduleDays if the property exists in the JSON object
      if (Object.prototype.hasOwnProperty.call(template, 'scheduleDays')) {
        setScheduleDays(template.scheduleDays);
      } else {
        setScheduleDays(defaultScheduleDays);
      }
      setEmailHtml(template.html ?? defaultEmailHtml);
    } else {
      setScheduleDays(defaultScheduleDays);
      setEmailHtml(defaultEmailHtml);
    }
  };

  // Save updates only for the current template
  const handleSave = async () => {
    setSaving(true);
    // Prepare updated configuration for the currently selected template
    const updatedTemplate = {
      scheduleDays,
      html: emailHtml
    };

    // Merge changes into the whole config
    const updatedConfig = {
      ...configData,
      [selectedTemplate]: {
        ...configData[selectedTemplate],
        ...updatedTemplate
      }
    };

    console.log("Saving configuration", updatedConfig);
    await fetch('/api/email-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedConfig)
    });
    // Update the local state with the updated config data
    setConfigData(updatedConfig);
    setSaving(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Email Configuration</h2>

      {/* Template Switcher Buttons */}
      <div className="mb-4 space-x-2">
        {Object.keys(EMAIL_TEMPLATES).map((key) => (
          <button
            key={key}
            onClick={() => handleTemplateSwitch(key)}
            className={`px-4 py-2 rounded ${
              selectedTemplate === key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {EMAIL_TEMPLATES[key]}
          </button>
        ))}
      </div>

      {/* Show schedule input only if the currently selected template has a scheduleDays property in the JSON */}
      {configData &&
        configData[selectedTemplate] &&
        Object.prototype.hasOwnProperty.call(configData[selectedTemplate], 'scheduleDays') && (
          <div className="mb-4">
            <label className="block mb-1">Schedule Days</label>
            <input
              type="number"
              value={scheduleDays}
              onChange={(e) => setScheduleDays(Number(e.target.value))}
              className="border p-2 w-24"
            />
          </div>
        )}

      <div className="mb-4">
        <label className="block mb-1">Email Content</label>
        <ReactQuill
          value={emailHtml}
          onChange={setEmailHtml}
          modules={{
            toolbar: [
              ['bold', 'italic', 'underline', 'link'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['clean']
            ]
          }}
          formats={['bold', 'italic', 'underline', 'list', 'link']}
        />
        <p className="mt-2 text-gray-500 text-sm">
          Note: The content will be saved as HTML with placeholders using {'{{ }}'}.
        </p>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={saving}
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
