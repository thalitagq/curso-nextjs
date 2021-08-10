import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props
  
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={`${styles.content} ${styles.glowing}`}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
