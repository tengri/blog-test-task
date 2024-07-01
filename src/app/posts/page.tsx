import {Posts} from '@/components/Posts';
import {client} from "@/api";



export default async function PostsPage() {
  const posts = (await client.GET("/posts", {populate: '*', params: {populate: '*', query: {populate: '*'}} })).data?.data;

  if (!posts) {
    throw new Error ('No posts found');
  }

  return (
    <Posts posts={posts} />
  )
}
