import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient ({
    apiVersion: '2024-05-21',
    dataset: 'production',
    projectId: 'lo0eumcw',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);