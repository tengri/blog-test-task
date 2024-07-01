import {Post} from '@/components/Post';
import {client} from "@/api";
import { TPost } from '@/types';

export default async function PostPage({params}: {params:{id: string}}) {
  const postId =  parseInt(params.id);

  if (!postId) {
     throw new Error ('Invalid post id');
  }

  const post = (await client.GET(`/posts/{id}`, { params: { query: {'populate[1]': 'imgUrl', 'populate[2]': 'comments'} as any , path: {id: postId}}})).data?.data as TPost;

  if (!post) {
      throw new Error ('Post not found');
  }

  return <Post post={post} />

}
