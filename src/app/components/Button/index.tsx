export default function Button({label, onClick}) {
    
  return (
    <button className="p-5 border border-zinc-200 bg-sky-400 text-white font-bold text-2xl flex-1 hover:opacity-60" onClick={onClick}>
        {label}
    </button>
  )
}
