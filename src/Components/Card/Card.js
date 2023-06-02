import './Card.css';

function Card({ children, classes }) {
  return (
    <div className={`card ${classes ? classes : ''}`}>
      {children}
    </div>
  )
}

export default Card;