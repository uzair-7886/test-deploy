// schemas/application.js
export default {
    name: 'application',
    title: 'Applications',
    type: 'document',
    fields: [
      {
        name: 'account',
        title: 'Account Information',
        type: 'object',
        fields: [
          {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
          },
          {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
          },
          {
            name: 'password',
            title: 'Password',
            type: 'string',
            description:
              'Store a hashed version of the password or handle authentication separately.',
          },
        ],
      },
      {
        name: 'step1',
        title: 'Registration Step',
        type: 'object',
        fields: [
          {
            name: 'program',
            title: 'Program',
            type: 'string',
          },
          {
            name: 'ageGroup',
            title: 'Age Group',
            type: 'string',
          },
          {
            name: 'subject1',
            title: 'Subject 1',
            type: 'string',
          },
          {
            name: 'subject2',
            title: 'Subject 2',
            type: 'string',
          },
        ],
      },
      {
        name: 'step2',
        title: 'Application Step',
        type: 'object',
        fields: [
          {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
          },
          {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
          },
          {
            name: 'dateOfBirth',
            title: 'Date of Birth',
            type: 'date',
          },
          {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
              list: ['Male', 'Female', 'Other'],
            },
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string',
          },
          {
            name: 'address',
            title: 'Home Address',
            type: 'string',
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
          },
          {
            name: 'passportCountry',
            title: 'Country (as per Passport)',
            type: 'string',
          },
        ],
      },
      {
        name: 'step3',
        title: 'Additional Information Step',
        type: 'object',
        fields: [
          {
            name: 'institution',
            title: 'Institution',
            type: 'string',
          },
          {
            name: 'candidateReason',
            title: 'Candidate Reason',
            type: 'text',
            description:
              'Why are you a suitable candidate for admission? (Max 500 words)',
            options: { maxLength: 500 },
          },
          {
            name: 'additionalInfo',
            title: 'Additional Information',
            type: 'text',
            description: 'Any other information (Max 500 words)',
            options: { maxLength: 500 },
          },
          {
            name: 'visaRequired',
            title: 'Visa Required',
            type: 'string',
            options: {
              list: ['Yes', 'No'],
              layout: 'radio',
            },
          },
          {
            name: 'hearAbout',
            title: 'How did you hear about our program?',
            type: 'string',
          },
        ],
      },
      {
        name: 'status',
        title: 'Application Status',
        type: 'string',
        description:
          'Indicates the current update about the application (e.g. account created, personal info submitted, completed etc.)',
        options: {
          list: [
            { title: 'Account Created', value: 'account_created' },
            { title: 'Program Selected', value: 'program_selected' },
            { title: 'Personal Info Submitted', value: 'personal_info_submitted' },
            {title:'Completed', value:'completed'},
            { title: 'Fee Submitted', value: 'fee_submitted' },
            // add more statuses as needed
          ],
        },
      },
      {
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
        description: 'The date and time when the application was submitted',
      },
      {
        name: 'followUpEmailSent',
        title: 'Offer Letter Email Sent',
        type: 'boolean',
        description: 'Indicates whether the 3-day follow-up Offer Letter email has been sent.',
        initialValue: false,
      },
      {
        name: 'sevenDayCallbackEmailSent',
        title: '7-Day Callback Email Sent',
        type: 'boolean',
        description: 'Indicates whether the 7-day callback email has been sent.',
        initialValue: false,
      },
      {
        name: 'payment',
        title: 'Payment Information',
        type: 'object',
        fields: [
          {
            name: 'paid',
            title: 'Paid',
            type: 'boolean',
            description: 'Indicates whether the payment has been made.',
            initialValue: false,
          },
          {
            name: 'paymentAmount',
            title: 'Payment Amount',
            type: 'number',
            description: 'The amount paid.',
            initialValue: 0,
          },
          {
            name: 'dueAmount',
            title: 'Due Amount',
            type: 'number',
            description: 'The due amount remaining.',
            initialValue: 0,
          },
        ],
      },
    ],
  };