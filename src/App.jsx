import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ListCard from './components/ListCard';
import AddListModal from './components/AddList';
import bg from './assets/bg.jpg'; 
import FloatingCD from './components/cd';
import SpotifyModal from './components/SpotifyModal';

function App() {
  const [lists, setLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('recs-lists');
    if (saved) {
      try {
        setLists(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing localStorage data:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (lists.length > 0) {
      localStorage.setItem('recs-lists', JSON.stringify(lists));
    }
  }, [lists]);

  const handleAddList = (newList) => {
    setLists([newList, ...lists]);
  };

  const [spotifyLink, setSpotifyLink] = useState('');
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);

  const getEmbedUrl = (link) => {
    const match = link.match(/spotify\.com\/(track|playlist|album)\/(\w+)/);
    if (!match) return null;
    return `https://open.spotify.com/embed/${match[1]}/${match[2]}`;
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar onAdd={() => setIsModalOpen(true)} />

      <AddListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddList}
      />

      <div className="px-6 py-4">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
          {lists.map((rec, i) => (
            <ListCard key={i} {...rec} />
          ))}
        </div>
      </div>

      {/* 🔊 Spotify floating CD button, modal, and player */}
      <FloatingCD onClick={() => setIsSpotifyOpen(true)} />

      <SpotifyModal
        isOpen={isSpotifyOpen}
        onClose={() => setIsSpotifyOpen(false)}
        onLinkSubmit={setSpotifyLink}
      />

      {spotifyLink && (
        <div className="fixed bottom-6 left-6 w-80 h-24 z-40">
          <iframe
            src={getEmbedUrl(spotifyLink)}
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify Player"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
