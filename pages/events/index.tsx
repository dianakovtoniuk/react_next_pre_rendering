import { Fragment } from 'react';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import type { EventItem } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

interface AllEventsPageProps {
  events: EventItem[];
}

function AllEventsPage(props: AllEventsPageProps) {
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<AllEventsPageProps> = async () => {
  return {
    props: {
      events: getAllEvents(),
    },
  };
};

export default AllEventsPage;
