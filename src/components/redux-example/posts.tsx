import { useFetchPostsQuery } from '@/features/posts/posts-api-slice';
import { Card, Spinner } from '@nextui-org/react';

const Posts = () => {
  const { data, isLoading } = useFetchPostsQuery();

  if (isLoading) {
    return <Spinner size="sm" />;
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {data?.map((post) => {
          return (
            <Card className="p-4 flex flex-col gap-3" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
