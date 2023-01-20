import { useContext } from 'react';
import './NewMusic.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';
import { songs } from '~/context';

import SongItem from '~/components/SongItem';
function NewMusic() {
  const { DataSong } = useContext(songs);
  return (
    <div className="zing-chart home">
      <div className="align-items-center d-flex">
        <h3 className="new-music-heading">Mới Phát Hành</h3>
        <div className="icon-play-icon">
          <BsFillPlayFill />
        </div>
      </div>
      <div className="zing-chart-playlist">
        {DataSong.map((song, index) => (
          <div className="playlist-item d-flex align-items-center" key={song.id}>
            <div className={`playlist-position top-${index + 1}`}>{index + 1}</div>
            <div className="playlist-line">
              <AiOutlineLine />
            </div>
            <SongItem key={song.id} song={song} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewMusic;
