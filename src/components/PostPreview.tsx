import React from 'react';

import Link from 'next/link'

import { TPost } from '@/types';
import Image from "next/image";

interface IProps {
  post: TPost;
}

const PostPreview: React.FC<IProps> = ({post}) => {
  return (
    <div className="flex bg-white rounded-lg p-4 sm:flex-row flex-col gap-4">
      <div className="flex justify-center items-center w-full sm:w-auto">
        <Image src={post.attributes?.imgUrl?.data?.attributes?.url!} alt={post.attributes?.imgUrl?.data?.attributes?.caption!} className={'object-contain'} width={'500'} height={'500'} />
      </div>

      <div className="w-2/3 ml-4">
        <h2 className="text-xl font-bold mb-2">{post.attributes?.title}</h2>
        <p className="text-gray-700 mb-4 truncate">{post.attributes?.content}</p>
        <Link className="bg-blue-600 text-white px-4 py-2 rounded-md" href={'posts/'+post.id} >Read</Link>
      </div>
    </div>
)};

export default PostPreview;
