/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./page.module.css";
import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <ul className={styles.posts}>
      {posts.map((post: any) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
}
