const handlesetLoadedSong = async (songName, songTracks, setLoadedSong) => {
  //Extract notes and time
  try {
    const simplifiedSongObj = songTracks.map((e, index) => ({
      id: `note-${index}`,
      note: e.note,
      time: e.time,
    }));

    //Create new version with simplified notes array
    const transformedSong = {
      name: songName,
      notes: simplifiedSongObj,
      totalTime: songTracks[songTracks.length - 1].time,
    };
    setLoadedSong(transformedSong);
  } catch (error) {
    console.error("Failed to load song:", error);
    setLoadedSong(null);
  }
};

export default handlesetLoadedSong;
