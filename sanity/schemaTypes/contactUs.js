export default {
    name: 'contactForm',
    title: 'Contact Form Submission',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'inquiryTopic',
        title: 'What would you like to ask about?',
        type: 'string',
        options: {
          list: [
            { title: 'General Inquiry', value: 'general' },
            { title: 'Program Details', value: 'program' },
            { title: 'Other', value: 'other' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'userType',
        title: 'Are you...?',
        type: 'string',
        options: {
          list: [
            { title: 'Student', value: 'student' },
            { title: 'Parent', value: 'parent' },
            { title: 'Professional', value: 'professional' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'acceptsCommunications',
        title: 'Accepts Email Communications',
        type: 'boolean',
        description: 'Whether the user accepts to receive email communications',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
      },
    ],
  };
  