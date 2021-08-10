import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph){
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width='auto'
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>
    }
  };

  return (
    <article className={`${styles.content} ${styles.glowing}`}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
