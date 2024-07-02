import React, { FC } from 'react'
import { TPost, TComment } from '@/types';
import Image from "next/image";
import {CommentList} from "@/components/CommentList";

import {CommentForm} from "@/components/CommentForm";
import Link from "next/link";

export interface PostProps {
  post: TPost;
}

export const Post: FC<PostProps> = ({post}) => {

  return (
    <div className="max-w-4xl mx-auto p-4 gap-4 flex-col flex">
      <div className={'my-4'}>
        <Link className="bg-gray-400 text-white px-4 py-2 rounded-md" href={'/posts'} >Back</Link>
      </div>

      <div className=" flex justify-center items-center mx-auto">
        <div className="bg-gray-300 w-full flex items-center justify-center rounded-md">
          <Image src={post.attributes?.imgUrl.data?.attributes?.url!} alt={post.attributes?.imgUrl.data?.attributes?.caption!} width={'864'} height={'864'} />
        </div>
      </div>
        <h2 className="text-xl font-bold my-2">{post.attributes?.title}</h2>
        <p className="text-gray-700">{post.attributes?.content}</p>
      <hr/>

      {
        !!post?.attributes?.comments?.data?.length ? (
          <CommentList comments={post.attributes.comments.data as TComment[]}/>
        ) : (
          <div>No comments</div>
        )
      }
     <CommentForm postId={post.id!}/>
    </div>
  );

}
