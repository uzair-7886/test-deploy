
export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'text',
        type: 'text',
        title: 'Testimonial Text',
        validation: (Rule) => Rule.required().max(1000)
      },
    ],
  }
  