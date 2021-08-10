import React, { Fragment } from 'react'
import AllPosts from '../../components/posts/all-posts';
import Head from 'next/head';
import { getAllPosts } from '../../lib/posts-util';

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all missions so far"/>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}