import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Advanced Routing" },
  { id: 3, title: "Protected Routes" },
];

function Blog() {
  return (
    <div>
      <h2 className="text-xl font-semibold">📝 Blog</h2>
      <ul className="list-disc pl-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Blog;
