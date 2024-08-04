import { create } from 'zustand';

const useAppStore = create((set) => ({
  currentAudio: null,
  isPlaying: false,
  transcription: [],
  keywords: {
    package: [],
    location: [],
    time: [],
    itineraries: [],
  },
  aiRecommendations: [],

  setCurrentAudio: (audio) => set({ currentAudio: audio }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setTranscription: (transcription) => set({ transcription }),
  setKeywords: (keywords) => set({ keywords }),
  setAIRecommendations: (recommendations) => set({ aiRecommendations: recommendations }),
  resetState: () => set({
    transcription: [],
    keywords: {
      package: [],
      location: [],
      time: [],
      itineraries: [],
    },
    aiRecommendations: [],
  }),
}));

export default useAppStore;