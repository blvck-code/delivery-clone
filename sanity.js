import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "7fn859p5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-12-01",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 cors policy
// sanity cors add http://localhost:3000

export default client;
