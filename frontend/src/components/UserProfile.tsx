import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import { useEffect, useState } from "react";
import type { UserProps } from "../types/User";

const UserProfile = ({ user }: UserProps) => {
  //   const [user, setUser] = useState();

  //   useEffect(() => {
  //     const storedUserd = localStorage.getItem("user");
  //     if (storedUserd) {
  //       setUser(JSON.parse(storedUserd));
  //     }
  //   });

  if (!user) return <p>Loading...</p>;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProfile;
