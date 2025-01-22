import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
    projectId:'i5qzy8wg',
    dataset:'eatlydb',
    useCdn: true,
    apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client