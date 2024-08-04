import React from 'react';
import { Card } from 'react-bootstrap';
import useAppStore from '../store/useAppStore';

const AIRecommender = () => {
  const { aiRecommendations, isPlaying } = useAppStore();

  if (!isPlaying) return null;

  return (
    <div>
      {aiRecommendations.map((recommendation, index) => (
        <Card key={index} className="mb-3">
          <Card.Img variant="top" src={recommendation} />
        </Card>
      ))}
    </div>
  );
};

export default AIRecommender;