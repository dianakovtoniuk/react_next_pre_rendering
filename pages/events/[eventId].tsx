import { Fragment } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { getAllEvents, getEventById } from '../../dummy-data';
import type { EventItem } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

interface EventDetailPageProps {
  event: EventItem;
}

function EventDetailPage(props: EventDetailPageProps) {
  const { event } = props;

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  EventDetailPageProps,
  { eventId: string }
> = async (context) => {
  const event = getEventById(context.params!.eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: { event },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllEvents().map((event) => ({
    params: { eventId: event.id },
  }));

  return { paths, fallback: false };
};

export default EventDetailPage;
