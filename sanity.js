import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'ry942oa8',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01'
})

const builder = imageBuilder(client);

export const urlFor = source => builder.image(source);

export default client;