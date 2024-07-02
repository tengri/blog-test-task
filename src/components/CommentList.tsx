import {FC} from 'react';
import {TComment} from "@/types";
import {Comment} from './Comment';

interface IProps {
  comments: TComment[];
}

export const CommentList: FC<IProps> = ({comments}) => {
  return (
    <div className={'my-4'}>
      <h1>Comments</h1>
      {
        comments.map((comment) => <Comment comment={comment} key={comment.id} />)
      }
    </div>
  )
}
