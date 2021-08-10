import React, { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import Head from 'next/head'
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>THE PARAGON BULLETIN</title>
        <meta name="description" content="Commander Shepard Blog"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 3600
  }
}
