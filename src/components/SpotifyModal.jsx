import { Window, WindowHeader, WindowContent, TextField, Button } from 'react95';
import { useState } from 'react';

export default function SpotifyModal({ isOpen, onClose, onLinkSubmit }) {
  const [link, setLink] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <Window style={{ width: 400 }}>
        <WindowHeader className="flex justify-between items-center px-2">
          <span>Set Spotify Track</span>
          <Button size="sm" onClick={onClose}>
            ✕
          </Button>
        </WindowHeader>
        <WindowContent className="flex flex-col gap-4">
          <TextField
            value={link}
            onChange={e => setLink(e.target.value)}
            placeholder="Paste Spotify link here"
          />
          <div className="flex justify-end">
            <Button onClick={() => {
              onLinkSubmit(link);
              onClose();
              setLink('');
            }}>
              Set Song
            </Button>
          </div>
        </WindowContent>
      </Window>
    </div>
  );
}
