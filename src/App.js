import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Router';
import { songs } from './context';
import { MainLayout } from '~/Layouts';
import DataSong from './data/songs.json';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSong[0]);
  const [nextSong, setNextSong] = useState(false);
  const handleSetSong = (isSong) => {
    const song = DataSong.find((song) => song.id == isSong);

    setSong(song);
  };
  console.log(nextSong);

  return (
    <Router>
      <div className="App">
        {/* handle music  */}
        <songs.Provider value={{ DataSong, song, handleSetSong, setNextSong, nextSong }}>
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
                      <Page />
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
