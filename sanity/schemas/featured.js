export default {
  name: "featured",
  title: "Featured Menu Categories",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurant",
      of: [
        {
          type: "reference",
          to: [{ type: "restaurant" }],
        },
      ],
    },
  ],
};
