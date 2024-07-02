import React from 'react';
import { TComment } from '@/types';

export interface CommentProps {
  comment: TComment;
}

export const Comment: React.FC<CommentProps> = ({ comment}) => {
  return (
    <div className="pt-2 mt-2 bg-gray-50 p-2">
      <p className="text-gray-800">{comment.attributes?.content}</p>
    </div>
  );
};
