import { useContext } from 'react';
import './ZingChat.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';
import { songs } from '~/context';
import LineChart from '~/components/LineChart';
import SongItem from '~/components/SongItem';
function ZingChat() {
  const { DataSong } = useContext(songs);
  return (
    <div className="zing-chart home">
      <div className="align-items-center d-flex">
        <h3 className="zing-chart-heading">#zingchart</h3>
        <div className="zing-chart-play-icon">
          <BsFillPlayFill />
        </div>
      </div>

      <div className="chart">
        <LineChart className="canvas" />

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
    </div>
  );
}
export default ZingChat;
