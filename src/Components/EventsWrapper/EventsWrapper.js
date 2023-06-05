import EventItem from "../EventItem/EventItem";
import LargeButton from "../partials/LargeButton/LargeButton";

const EventsWrapper = () => {
  return (
    <div className="events-wrapper">
      <h2 className="section-title">Renginiai</h2>
      <div className="events-list">
        <EventItem />
        <EventItem />
        <EventItem />
      </div>

      {/* <a href="/#" className="button-large">Daugiau</a> */}
      <LargeButton />
    </div>
  )
}

export default EventsWrapper;