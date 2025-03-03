'use client';

import { useState } from 'react';
import ApplicationTable from './ApplicationTable';
import EmailConfig from './EmailConfig';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('applications');

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'applications' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('applications')}
        >
          View Applications
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'emailConfig' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('emailConfig')}
        >
          Email Config
        </button>
      </div>
      {activeTab === 'applications' && <ApplicationTable />}
      {activeTab === 'emailConfig' && <EmailConfig />}
    </div>
  );
}