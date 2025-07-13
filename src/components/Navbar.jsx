import { AppBar, Toolbar, Button } from 'react95';

export default function Navbar({ onAdd }) {
  return (
    <AppBar style={{ position: 'relative', padding: '0 1rem' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 'normal' }}>📀Recs Room</span>
        <Button className= "ml-auto px-3 py-1 border border-black shadow-[2px_2px_0_#000] bg-white hover:bg-gray-100"
        onClick={onAdd}>Add List</Button>
      </Toolbar>
    </AppBar>
  );
}
