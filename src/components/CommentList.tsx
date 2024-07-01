import {FC} from 'react';
import {TComment, TPost} from "@/types";
import {Comment} from './Comment';

interface IProps {
  comments: TComment[];
  postId: number;
}

export const CommentList: FC<IProps> = ({comments, postId}) => {
  return (
    <div className={'mb-4'}>
      <h1>Comments</h1>
      {
        comments.map((comment) => <Comment comment={comment} key={comment.id} />)
      }
    </div>
  )
}
