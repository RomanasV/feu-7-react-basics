const EventItem = () => {
  return (
    <div className="event">
      <a href="/#">
        <div className="image-wrapper">
          <img className="event-image" src="https://codeacademy.lt/wp-content/uploads/2023/01/Screenshot-2023-01-13-150320-300x298.png" alt='' />
        </div>
        <div className="event-content">
          <div className="event-date">
            <span className="event-day">17</span>
            <span className="event-month">Sau</span>
          </div>

          <div className="event-info">
            <span className="event location">Online</span>
            <h3 className="event-title">CodeAcademy Talents</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventItem;