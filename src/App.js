import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Router';
import { songs } from './context';
import { MainLayout } from '~/Layouts';
import DataSong from './data/songs.json';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSong[0]);
  const [indexSong, setIndexSong] = useState(0);
  // next song

  const nextSong = () => {
    let index = song.id + 1;
    if (index === DataSong.length) {
      handleSetSong(0);
    } else {
      handleSetSong(index);
    }
  };
  // prev Song
  const prevSong = () => {
    let index = song.id - 1;
    if (index < 0) {
      handleSetSong(DataSong.length - 1);
    } else {
      handleSetSong(index);
    }
  };
  // random
  const randomSong = () => {
    let x;
    do {
      x = Math.floor(Math.random() * DataSong.length - 1);
    } while (song.id === x);

    handleSetSong(x);
    setIndexSong(x);
  };
  const repeatSong = () => {
    handleSetSong(song.id);
  };
  //  kiểm tra id trả về bài hát hiện tại
  const handleSetSong = (currentIndex) => {
    const song = DataSong.find((song) => song.id === currentIndex);
    setSong(song);
  };

  return (
    <Router>
      <div className="App">
        {/* handle music  */}
        <songs.Provider
          value={{ DataSong, song, handleSetSong, nextSong, prevSong, randomSong, repeatSong, indexSong }}
        >
          {/* change layout */}
          <Routes>
            {publicRoute.map((route, index) => {
              const Layout = route.layout || MainLayout;
              const Page = route.pat;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </songs.Provider>
      </div>
    </Router>
  );
}

export default App;
