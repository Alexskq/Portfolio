// ./src/utils/sanity/client.ts
// import {createClient} from 'next-sanity'
// import createImageUrlBuilder from '@sanity/image-url'
// import { createClient, ClientConfig } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-06'

// export const clientConfig = createClient({
//   projectId,
//   dataset,
//   apiVersion, // https://www.sanity.io/docs/api-versioning
//   useCdn: true,
//   useGqlTag: true // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
// })

// export const sanityClient = createClient(clientConfig)

// export const urlFor = (source: any ) => createImageUrlBuilder(clientConfig).image(source)

import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'
import imageUrlBuilder from '@sanity/image-url';

const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn: true,
};

const client = createClient(config);

export const sanityClient = client;

export const urlFor = (source: any) => createImageUrlBuilder(client).image(source);
