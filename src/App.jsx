import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ListCard from './components/ListCard';
import AddListModal from './components/AddList';
import bg from './assets/bg.jpg'; 
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
        setLists(initialLists);
      }
    } else {
      setLists(initialLists);
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
    </div>
  );
}

export default App;
