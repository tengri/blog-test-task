import PostPreview from './PostPreview';
import { TPost } from '../types';

interface IProps {
  posts: Array<TPost>;
}

export const Posts = ({ posts }: IProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {posts?.map(post => (
        <PostPreview post={post} key={post.id} />
      ))}
    </div>
  );
};
