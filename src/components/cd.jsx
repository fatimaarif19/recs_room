import cdGif from '../assets/cd.gif'; 

export default function FloatingCD({ onClick }) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src={cdGif}
        alt="Floating CD"
        className="w-30 h-30 animate-spin-slow"
      />
      <span className="mt-1 text-[10px] text-center bg-white px-1 py-px border border-black shadow-[1px_1px_0_#000] rounded w-[max-content]">
        Add your music
      </span>
    </div>
  );
}
