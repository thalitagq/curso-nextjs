import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage(props) {
  const event = props.event

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAll={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventId
  const event = await getEventById(eventId)
  
  return {
    props:{
      event
    },
    revalidate: 30
  }
}

export async function getStaticPaths(){
  const events = await getFeaturedEvents()
  const paths = events.map(event => ({params: {eventId: event.id}}))

  return {
    paths: paths,
    fallback: true
  }
}
