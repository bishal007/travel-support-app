import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from './components/AudioPlayer';
import Transcription from './components/Transcription';
import Keywords from './components/Keywords';
import AIRecommender from './components/AIRecommender';
import conversationsData from './data/conversations.json';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <h2>Audio</h2>
          {conversationsData.map((conversation, index) => {
            const audioKey = Object.keys(conversation)[0];
            return (
              <AudioPlayer
                key={index}
                audioSrc={`/audio/${audioKey}.mp3`}
                audioData={conversation[audioKey]}
              />
            );
          })}
        </Col>
        <Col md={3}>
          <h2>Transcription</h2>
          <Transcription />
        </Col>
        <Col md={3}>
          <h2>Keywords</h2>
          <Keywords />
        </Col>
        <Col md={3}>
          <h2>AI Recommender</h2>
          <AIRecommender />
        </Col>
      </Row>
    </Container>
  );
};

export default App;