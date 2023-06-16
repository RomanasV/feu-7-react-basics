import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";

const ApiPage = () => {
  return (
    <Container>
      <h1>Check out my API projects:</h1>

      <div className="api-projects-list">
        <Card>
          <h2 className="project-title">Chuck Norris API</h2>
          <p className="project-description">Aprašymas</p>

          <Link to="/api/chuck-norris">Click Here</Link>
        </Card>

        <Card>
          <h2 className="project-title">Dogs API</h2>
          <p className="project-description">Aprašymas</p>

          <Link to="/api/dogs">Click Here</Link>
        </Card>

        <Card>
          <h2 className="project-title">AI API</h2>
          <p className="project-description">Aprašymas</p>

          <Link to="/api/ai">Click Here</Link>
        </Card>
      </div>
    </Container>
  )
}

export default ApiPage;