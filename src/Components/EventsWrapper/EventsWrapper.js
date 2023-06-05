import EventItem from "../EventItem/EventItem";
import LargeButton from "../partials/LargeButton/LargeButton";

const EventsWrapper = () => {
  const eventsData = [
    {
      image: {
        src: 'https://codeacademy.lt/wp-content/uploads/2023/01/Screenshot-2023-01-13-150320-300x298.png',
        alt: '',
      },
      url: '/#',
      title: 'CodeAcademy Talents',
      location: 'Online',
      date: {
        day: 17,
        month: 'Sau',
      }
    },
    {
      image: {
        alt: '',
      },
      url: '/#',
      title: 'CodeAcademy Talents',
      location: 'Online',
      date: {
        day: 17,
        month: 'Sau',
      }
    },
    {
      image: {
        src: 'https://codeacademy.lt/wp-content/uploads/2023/01/Screenshot-2023-01-13-150320-300x298.png',
        alt: '',
      },
      url: '/#',
      title: 'CodeAcademy Talents',
      location: 'Online',
      date: {
        day: 17,
        month: 'Sau',
      }
    }
  ];

  const eventElements = eventsData.map((event, index) => {
    if (index !== 0) {
      delete event.image;
    }

    return <EventItem key={index} data={event} />
  });

  return (
    <div className="events-wrapper">
      <h2 className="section-title">Renginiai</h2>
      <div className="events-list">
        {eventElements}
      </div>

      <LargeButton url='/#'>Daugiau</LargeButton>
    </div>
  )
}

export default EventsWrapper;