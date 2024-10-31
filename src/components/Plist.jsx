import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function PList({ title, thumbnail, des, func }) {
  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{des}</Card.Text>
        </div>
        <div className="d-flex justify-content-center mt-auto">
          <Button variant="primary" onClick={func}>Show More</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
