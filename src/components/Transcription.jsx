import React from 'react';
import { ListGroup } from 'react-bootstrap';
import useAppStore from '../store/useAppStore';

const Transcription = () => {
  const { transcription, isPlaying } = useAppStore();

  if (!isPlaying) return null;

  return (
    <ListGroup>
      {transcription.map((text, index) => (
        <ListGroup.Item key={index}>{text}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Transcription;