import React from 'react'
import PostItem from './post-Item'
import styles from './posts-grid.module.css'

export default function PostsGrid(props) {  
  const { posts } = props

  return (
    <ul className={styles.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post}/>)}
    </ul>
  )
}
