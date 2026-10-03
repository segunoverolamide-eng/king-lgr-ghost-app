'use client'
import { useState } from 'react'

export default function Page() {
  const [tab, setTab] = useState('Chats')

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[430px] bg-[#0f0f0f] min-h-screen pb-20">

        {/* === FACEBOOK ZONE === */}
        <div className="p-3 bg-[#0f0f0f] sticky top-0 z-20 border-b border-[#222]">
          <p className="text-[10px] bg-white text-black px-2 py-1 rounded inline-block mb-2">This will work like Facebook</p>
          <div className="flex justify-between items-center">
            <h1 className="text-[#c6ff00] font-black">GHOST</h1>
            <div className="flex gap-4 text-xl">
              <span>🔍<sup className="bg-red-500 text-[10px] px-1 rounded-full">15+</sup></span>
              <span>👥<sup className="bg-red-500 text-[10px] px-1 rounded-full">5</sup></span>
              <span>🔔<sup className="bg-red-500 text-[10px] px-1 rounded-full">15+</sup></span>
              <span>☰</span>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="bg-[#c6ff00] text-black px-4 py-1 rounded-full text-sm font-bold">All</button>
            <button className="bg-[#2a2a2a] px-4 py-1 rounded-full text-sm">Unread</button>
            <button className="bg-[#2a2a2a] px-4 py-1 rounded-full text-sm">Favorites</button>
            <button className="bg-[#2a2a2a] px-4 py-1 rounded-full text-sm">Groups</button>
          </div>
          <div className="bg-[#2a2a2a] rounded-full px-3 py-2 mt-3 flex gap-2">
            <span>🔍</span><input placeholder="Ask Meta AI or Search" className="bg-transparent text-sm w-full outline-none" />
          </div>
        </div>

        {/* === CHATS ZONE === */}
        <div className="p-3 space-y-2">
          <div className="bg-[#1a1a1a] p-3 rounded-xl flex gap-3"><img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 rounded-full"/><div><p className="text-sm font-bold">gamer_ella • 14m ago</p><p className="text-xs text-gray-400">Trying the 50 games challenge!!</p></div></div>
          <div className="bg-[#1a1a1a] p-3 rounded-xl flex gap-3"><img src="https://i.pravatar.cc/100?img=8" className="w-10 h-10 rounded-full"/><div><p className="text-sm font-bold">Alex</p><p className="text-xs text-gray-400">Are you joining Soccer Stars later?</p></div></div>
        </div>

        {/* === 50 GAMES ZONE === */}
        <div className="p-3 mt-2 border-t border-[#222]">
          <p className="text-[12px] bg-white text-black px-2 py-1 rounded inline-block mb-2">This we are 50 game that boys and girl like the most</p>
          <div className="grid grid-cols-4 gap-2">
            {['⚽ Soccer Stars','🏀 Basketball','🏎️ Racing','🔫 Shoot','🧩 Puzzle','👾 Arcade','♟️ Chess','🎯 Ludo','🏏 Cricket','🐍 Snake','🏹 Archery','🚀 Space'].map(g=>(
              <div key={g} className="bg-[#1a1a1a] rounded-xl p-2 text-center text-[10px]">{g}</div>
            ))}
          </div>
          <button className="w-full mt-2 bg-[#c6ff00] text-black py-2 rounded-xl font-bold text-sm">PLAY ALL 50 GAMES</button>
        </div>

        {/* === STARTIME DECODER ZONE === */}
        <div className="p-3 mt-2 border-t border-[#222]">
          <p className="text-[12px] bg-white text-black px-2 py-1 rounded inline-block mb-2">This will be like Startime decoder</p>
          <div className="bg-[#1a1a1a] rounded-xl p-3">
            <p className="text-sm font-bold">📡 LIVE TV CHANNELS</p>
            <div className="flex gap-2 mt-2 overflow-x-auto">
              <div className="bg-red-600 px-3 py-1 rounded text-xs">NTA</div>
              <div className="bg-blue-600 px-3 py-1 rounded text-xs">Africa Magic</div>
              <div className="bg-green-600 px-3 py-1 rounded text-xs">Sports</div>
              <div className="bg-yellow-600 text-black px-3 py-1 rounded text-xs">Cartoon</div>
            </div>
            <div className="mt-3 h-24 bg-black rounded flex items-center justify-center text-gray-500 text-xs">▶️ Video Player Here</div>
          </div>
        </div>

        {/* === TIKTOK / STATUS ZONE === */}
        <div className="p-3 mt-2 border-t border-[#222]">
          <p className="text-[12px] bg-white text-black px-2 py-1 rounded inline-block mb-2">This will work like tiktok that means status</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <div className="min-w-[80px] h-[120px] bg-gradient-to-b from-pink-500 to-purple-600 rounded-xl p-2 flex flex-col justify-end"><p className="text-[10px] font-bold">Mama's Status</p><p className="text-[8px]">New...</p></div>
            <div className="min-w-[80px] h-[120px] bg-gradient-to-b from-green-500 to-blue-600 rounded-xl p-2 flex flex-col justify-end"><p className="text-[10px] font-bold">Your Status</p><p className="text-[8px]">Tap to add</p></div>
            <div className="min-w-[80px] h-[120px] bg-gradient-to-b from-yellow-500 to-red-600 rounded-xl p-2 flex flex-col justify-end"><p className="text-[10px] font-bold">Alex Reels</p><p className="text-[8px]">🔥 1.2k</p></div>
          </div>
        </div>

        {/* === BOTTOM NAV === */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-black border-t border-[#222] flex justify-around py-2">
          <button onClick={()=>setTab('Chats')} className={`flex flex-col items-center ${tab==='Chats'?'text-[#c6ff00]':''}`}><span>💬</span><span className="text-[10px]">Chats</span></button>
          <button onClick={()=>setTab('Feed')} className={`flex flex-col items-center ${tab==='Feed'?'text-[#c6ff00]':''}`}><span>🏠</span><span className="text-[10px]">Feed</span></button>
          <button onClick={()=>setTab('Reels')} className={`flex flex-col items-center ${tab==='Reels'?'text-[#c6ff00]':''}`}><span>▶️</span><span className="text-[10px]">Reels</span></button>
          <button onClick={()=>setTab('Games')} className={`flex flex-col items-center ${tab==='Games'?'text-[#c6ff00]':''}`}><span>🎮</span><span className="text-[10px]">Games</span></button>
          <button onClick={()=>setTab('Liger AI')} className={`flex flex-col items-center ${tab==='Liger AI'?'text-[#c6ff00]':''}`}><span>✨</span><span className="text-[10px]">Liger AI</span></button>
        </div>

      </div>
    </div>
  )
    }
