import React from 'react';
import { Button } from 'react-bootstrap';
import useAppStore from '../store/useAppStore';

const AudioPlayer = ({ audioSrc, audioData }) => {
  const {
    isPlaying,
    setIsPlaying,
    currentAudio,
    setCurrentAudio,
    setTranscription,
    setKeywords,
    setAIRecommendations,
    resetState,
  } = useAppStore();

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentAudio(audioSrc);
    
    const transcription = audioData.map(item => item.Text).filter(Boolean);
    setTranscription(transcription);

    const keywords = audioData.reduce((acc, item) => {
      if (item.keyword) {
        item.keyword.split(', ').forEach(keyword => {
          const category = keyword.length > 3 ? 'location' : 'time';
          if (!acc[category]) acc[category] = [];
          acc[category].push(keyword);
        });
      }
      return acc;
    }, {});
    setKeywords(keywords);

    const aiRecommendations = audioData
      .map(item => item.AIrecommender)
      .filter(Boolean);
    setAIRecommendations(aiRecommendations);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentAudio(null);
    resetState();
  };

  return (
    <div>
      <Button onClick={handlePlay} disabled={isPlaying && currentAudio === audioSrc}>Play</Button>
      <Button onClick={handleStop} disabled={!isPlaying || currentAudio !== audioSrc}>Stop</Button>
    </div>
  );
};

export default AudioPlayer;