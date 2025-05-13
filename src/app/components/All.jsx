// pages/index.js
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

export default function All() {
  const { data, error, isLoading } = useQuery(['posts'], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data!</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
