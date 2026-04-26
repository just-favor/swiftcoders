import { client } from './client'

export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      "author": author->name,
      "category": categories[0]->title,
    }`
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "category": categories[0]->title,
      "author": author->name,
      mainImage,
      body,
    }`,
    { slug }
  )
}
