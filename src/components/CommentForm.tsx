"use client";

import { useForm } from "react-hook-form";
import React, { useState, FormEvent } from 'react'
import {client} from "@/api";

import { useRouter } from 'next/navigation';


export interface PostProps {
  postId: number;
}

interface IFormData {
  content: string;
}

export const CommentForm: React.FC<PostProps> = ({postId}) => {
  const [statusMessage, setStatusMessage] = useState('Post a comment');
  const { register, handleSubmit, formState: { errors }, clearErrors, reset, } = useForm<IFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

   const onSubmit = async (data: IFormData) => {

    setIsLoading(true);

    try {
      const {content} = data;
      console.log('content: ', content);
      const response = await client.POST('/comments',  {body: {"data": {content, postId}}});

      if (response.error) {
        setStatusMessage(response.error.error.message || 'Something went wrong ;(');
      } else {
        setStatusMessage('Comment created successfully!');
        reset();
        clearErrors();
        router.refresh();
      }
    } catch (error: any) {
      // Capture the error statusMessage to display to the user
      setStatusMessage(error.statusMessage || 'Something went wrong')
      console.error('error: ', error)
    } finally {
      setIsLoading(false);
    }

  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <textarea required rows={4}
                  {...register("content", { required: true })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

      <div className={'flex justify-between mt-4'}>
        <span className="text-sm text-gray-500">{statusMessage}</span>

        <button type="submit"  className="bg-gray-600 text-white px-4 py-2 rounded-md w-36" disabled={isLoading}>{isLoading ? '...submitting' : 'Submit'}</button>
      </div>

    </form>
  );

}
