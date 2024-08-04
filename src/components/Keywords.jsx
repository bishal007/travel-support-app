import React from 'react';
import { Card } from 'react-bootstrap';
import useAppStore from '../store/useAppStore';

const Keywords = () => {
  const { keywords, isPlaying } = useAppStore();

  if (!isPlaying) return null;

  return (
    <div>
      {Object.entries(keywords).map(([category, items]) => (
        <Card key={category} className="mb-3">
          <Card.Header>{category}</Card.Header>
          <Card.Body>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Keywords;