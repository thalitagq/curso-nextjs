import React, { Fragment, useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import useSWR from 'swr'
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function FilterdEventsPage(props) {
  const [events, setEvents] = useState()
  const router = useRouter();

  const filteredData = router.query.slug;

  const {data,error} = useSWR(
    "https://curso-react-13b8e-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setEvents(events)
    }
  }, [data])

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content="A list of filtere events"
      />
    </Head>
  );

  if (!events) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Loagind...</p>
      </Fragment>
    );
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1 || error
  ) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p className="center">Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p className="center">No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context

//   const filteredData = params.slug;

//   const filteredYear = filteredData[0];
//   const filteredMonth = filteredData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numMonth > 12 ||
//     numMonth < 1
//   ) {
//     return {
//       props:{hasError: true}
//       // notFound: true, 
//       // redirect:{
//       //   destination: '/error'
//       // }
//     }
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date:{
//         year: numYear,
//         month: numMonth
//       }
//     },
//   };
// }
