import React from 'react'
import Head from 'next/head'
import {getFeaturedEvents} from '../helpers/api-util'
import EventList from '../components/events/event-list'

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find a lot of grate events that allow you to evolve..."/>
      </Head>
      <EventList items={props.events}/>
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents()
  
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}