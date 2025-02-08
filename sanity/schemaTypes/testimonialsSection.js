export default {
  name: 'testimonialsSection',
  type: 'document',
  title: 'Testimonials Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title'
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          name: 'testimonial',
          type: 'object',
          title: 'Testimonial',
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
                hotspot: true
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
          ]
        }
      ]
    }
  ]
}
