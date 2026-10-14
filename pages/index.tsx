import type { GetStaticProps } from 'next';

import { getFeaturedEvents } from '../dummy-data';
import type { EventItem } from '../dummy-data';
import EventList from '../components/events/event-list';

interface HomePageProps {
  featuredEvents: EventItem[];
}

function HomePage(props: HomePageProps) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      featuredEvents: getFeaturedEvents(),
    },
  };
};

export default HomePage;
