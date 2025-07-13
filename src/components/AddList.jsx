import { Window, WindowHeader, WindowContent, TextField, Button } from 'react95';
import { useState } from 'react';

export default function AddListModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !items.trim()) return;

    const newList = {
      title: title.trim(),
      description: description.trim(),
      items: items.split('\n').map(item => item.trim()).filter(item => item !== ''),
    };

    onAdd(newList);
    setTitle('');
    setDescription('');
    setItems('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <Window className="w-[90vw] max-w-md">
        <WindowHeader>
          <span>add your recommendations</span>
        </WindowHeader>
        <WindowContent className="flex flex-col gap-3 p-3">
          <TextField
            value={title}
            onChange={e => setTitle(e.target.value.slice(0, 30))}
            placeholder="title & emoji :) (max 30 chars)"
          />
          <TextField
            value={description}
            onChange={e => setDescription(e.target.value.slice(0, 60))}
            placeholder="one line description (max 60 chars)"
          />
          <textarea
            value={items}
            onChange={e => setItems(e.target.value)}
            placeholder="enter your list, one entry in one line"
            rows={5}
            className="p-2 border border-black rounded font-mono"
          />
          <div className="flex justify-end gap-2">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </WindowContent>
      </Window>
    </div>
  );
}
