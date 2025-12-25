/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./page.module.css";
import type { Metadata } from 'next'
 
async function getPost(id: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

// export async function generateStaticParams() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
//   return posts.map((post: any) => ({
//     id: String(post.id),
//   }))
// }

export default async function PostDetailPage({ params }: any) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.text}>{post.body}</p>
    </article>
  );
}
