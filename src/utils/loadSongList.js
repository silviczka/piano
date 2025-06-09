import HandlesetLoadedSong from "./handlesetLoadedSong";

const loadSongList = async (setLoadedSong, setSongList, mode) => {
  try {
    const songModules = import.meta.glob("/assets/songs/jsons/*.json");
    const loadedSongs = [];
    for (const path in songModules) {
      const songModule = await songModules[path]();
      loadedSongs.push(songModule.default);
    }

    if (loadedSongs.length < 1) return;
    let modeSongs = loadedSongs;
    if (mode === "normal") {
      modeSongs = loadedSongs.filter((song) => song.header.mode === "normal");
    }

    setSongList(modeSongs);

    const mainTrack = loadedSongs[0].tracks?.[0];
    if (!mainTrack || !Array.isArray(mainTrack.events)) {
      throw new Error("Main track missing or malformed");
    }
    HandlesetLoadedSong(
      loadedSongs[0].header.title,
      mainTrack.events,
      setLoadedSong,
    );
  } catch (error) {
    setLoadedSong(null);
  }
};

export default loadSongList;
