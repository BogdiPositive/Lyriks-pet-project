import { Error, Loader, SongCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/spotify";
import { useSelector } from "react-redux";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  const { activeSong, isPlaying, ganreListId } = useSelector(
    (state) => state.player
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
