'use client'
import { useState } from 'react'

export default function KingLGRGhostApp() {
  const [activeTop, setActiveTop] = useState('Chats')
  const [activeFilter, setActiveFilter] = useState('All')

  const chats = [
    { name: 'gamer_ella', time: '14m ago', msg: 'Trying the 50 games challenge!!', sub: 'You: Yep, it\'s so fun', icon: '🎮', count: 12, img: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Alex', time: '', msg: 'Are you joining Soccer Stars later?', sub: '', icon: '', count: 1, badge: 3, img: 'https://i.pravatar.cc/100?img=8' },
    { name: 'Family Group', time: '12m ago', msg: 'Mom: Dinner at 7pm today', sub: 'Love you all ❤️', icon: '🎵', count: 1, img: 'https://i.pravatar.cc/100?img=15' },
    { name: 'Dino Fan Club', time: '1h ago', msg: 'Liam: New Dino Dash level is crazy! 🦖', sub: '', icon: '🎵', count: 12, img: 'https://i.pravatar.cc/100?img=9' },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[430px] bg-[#0e0e0e] min-h-screen pb-20">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-[#c6ff00] font-black text-[20px] tracking-wider">KING LGR GHOST • APP</h1>
          <span className="bg-[#c6ff00] text-black text-[9px] px-2 py-1 rounded-full font-bold">v3.1 • FINAL 5-IN-1</span>
        </div>

        {/* TOP ZONE */}
        <div className="px-4">
          <p className="text-[#c6ff00] text-[12px] font-bold">▲ TOP ZONE — FACEBOOK-STYLE NAVIGATION</p>
          <p className="text-gray-400 text-[10px] mb-3">5 ICONS + BADGES | SOCIAL HEADER LIKE FACEBOOK</p>
          <div className="flex justify-between bg-[#1a1a1a] rounded-2xl p-3">
            {[
              { name: 'Feed', badge: '15+', icon: '🏠' },
              { name: 'Friends', badge: '15+', icon: '👥' },
              { name: 'Chats', badge: '5', icon: '💬', active: true },
              { name: 'Notifications', badge: '6', icon: '🔔' },
              { name: 'More', badge: '', icon: '☰' },
            ].map((item) => (
              <button key={item.name} onClick={()=>setActiveTop(item.name)} className="flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTop===item.name?'bg-[#c6ff00] text-black':'bg-[#2a2a2a]'}`}>{item.icon}</div>
                {item.badge && <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1 rounded-full">{item.badge}</span>}
                <span className="text-[10px] mt-1">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE ZONE */}
        <div className="px-4 mt-6">
          <p className="text-[#c6ff00] text-[12px] font-bold">▲ MIDDLE ZONE 1 — WHATSAPP-STYLE CHATS</p>
          <p className="text-gray-400 text-[10px] mb-3">WHATSAPP-STYLE CHAT | ALL | UNREAD | FAVORITES | GROUPS | ARCHIVED</p>

          <div className="flex gap-2 mb-3 overflow-x-auto">
            {['All','Unread','Favorites','Groups'].map(f=>(
              <button key={f} onClick={()=>setActiveFilter(f)} className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${activeFilter===f?'bg-[#c6ff00] text-black':'bg-[#2a2a2a] text-white'}`}>{f}</button>
            ))}
          </div>

          <div className="bg-[#1e1e1e] rounded-full px-4 py-2 flex items-center gap-2 mb-3">
            <span>🔍</span>
            <input placeholder="Ask Meta AI or Search" className="bg-transparent w-full text-sm outline-none placeholder:text-gray-500" />
          </div>

          <div className="space-y-3">
            {chats.map(c=>(
              <div key={c.name} className="flex gap-3 bg-[#1a1a1a] p-3 rounded-2xl">
                <img src={c.img} className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">{c.name} <span className="font-normal text-gray-400 text-xs">{c.time}</span></p>
                    {c.count>0 && <span className="bg-[#1e2a1e] text-[#c6ff00] text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">🎵 {c.count}</span>}
                  </div>
                  <p className="text-sm text-gray-300 truncate">{c.msg}</p>
                  {c.sub && <p className="text-xs text-gray-500">{c.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-black border-t border-[#222] flex justify-around p-2">
          <button className="flex flex-col items-center bg-[#c6ff00] text-black px-3 py-1 rounded-xl">
            <span>💬</span><span className="text-[9px] font-bold">Chats (WhatsApp)</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>🎮</span><span className="text-[9px]">Games (50 games)</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>📡</span><span className="text-[9px]">STARTIME<br/>(decoder)</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>▶️</span><span className="text-[9px]">Reels (TikTok)</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>✨</span><span className="text-[9px]">Liger AI</span>
          </button>
        </div>
      </div>
    </div>
  )
    }
