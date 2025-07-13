export default function ListCard({ title, description, items }) {
  const colors = [
    'bg-pink-200',
    'bg-purple-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-rose-200',
    'bg-cyan-200'
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`p-4 rounded-md border border-black shadow-[4px_4px_0_#000] mb-4 break-inside-avoid hover:shadow-[6px_6px_0_#000] transition-all duration-150 ${randomColor}`}>
      <h2 className="font-bold text-base mb-1">{title}</h2>
      <p className="text-sm mb-2">{description}</p>
      <ul className="list-disc pl-4 text-sm leading-snug">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
