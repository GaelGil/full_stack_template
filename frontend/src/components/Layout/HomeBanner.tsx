import { Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="bg-light py-5 text-center">
      <Container>
        <h1>Welcome to My Website</h1>
        <p className="lead">
          This is a simple homepage built with React and Bootstrap.
        </p>
        <Button variant="primary">Get Started</Button>
      </Container>
    </div>
  );
};

export default HomeBanner;
