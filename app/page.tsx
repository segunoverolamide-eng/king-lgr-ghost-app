"use client";
import { useState } from "react";

export default function Home(){
const [logged,setLogged]=useState(false);
const [tab,setTab]=useState('Chats');
const [loginData,setLoginData]=useState({phone:'',pass:'',country:'Nigeria',lang:'English'});

if(!logged){
return(
<div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20}}>
<h1 style={{textAlign:'center',color:'#0f0',fontSize:28}}>👻 LIGER GHOST SUPER APP</h1>
<p style={{textAlign:'center',color:'#aaa'}}>Facebook + TikTok + Games in 1</p>

<div style={{background:'#111',padding:20,borderRadius:15,marginTop:20,border:'1px solid #333',maxWidth:400,margin:'20px auto'}}>
<h3>Login / Create Account</h3>

<label>Country</label>
<select value={loginData.country} onChange={e=>setLoginData({...loginData,country:e.target.value})} style={{width:'100%',padding:12,borderRadius:8,margin:'8px 0',background:'#222',color:'#fff',border:'1px solid #444'}}>
<option>Nigeria</option><option>Ghana</option><option>USA</option><option>UK</option><option>South Africa</option>
</select>

<label>Language</label>
<select value={loginData.lang} onChange={e=>setLoginData({...loginData,lang:e.target.value})} style={{width:'100%',padding:12,borderRadius:8,margin:'8px 0',background:'#222',color:'#fff',border:'1px solid #444'}}>
<option>English</option><option>Yoruba</option><option>Hausa</option><option>Igbo</option><option>Pidgin</option>
</select>

<label>Phone or Gmail</label>
<input placeholder="8131286805 or email@gmail.com" value={loginData.phone} onChange={e=>setLoginData({...loginData,phone:e.target.value})} style={{width:'100%',padding:12,borderRadius:8,margin:'8px 0',background:'#222',color:'#fff',border:'1px solid #444'}} />

<label>Password</label>
<input type="password" placeholder="Password" value={loginData.pass} onChange={e=>setLoginData({...loginData,pass:e.target.value})} style={{width:'100%',padding:12,borderRadius:8,margin:'8px 0',background:'#222',color:'#fff',border:'1px solid #444'}} />

<button onClick={()=>setLogged(true)} style={{width:'100%',padding:14,borderRadius:25,background:'#0f0',color:'#000',fontWeight:'bold',border:'none',marginTop:15,fontSize:16}}>ENTER APP 🚀</button>

<div style={{marginTop:15,padding:10,background:'#000',borderRadius:8,border:'1px dashed #0f0'}}>
<p style={{fontSize:12,color:'#0f0',margin:0}}>Your OPay Verified:</p>
<p style={{fontSize:13,margin:'5px 0'}}>ola Richey<br/>8131286805<br/>IDOWU MARYAM AYOOLA</p>
</div>
</div>
</div>
)}

return(
<div style={{background:'#000',color:'#fff',minHeight:'100vh',paddingBottom:70}}>
<div style={{background:'#111',padding:'10px 15px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #222',position:'sticky',top:0}}>
<span style={{color:'#0f0',fontWeight:'bold'}}>👻 GHOST</span>
<div style={{display:'flex',gap:10}}>
<span>👥</span><span>🔍</span><span>🔔</span><span>☰</span>
</div>
</div>

<div style={{padding:10}}>
<div style={{display:'flex',gap:8,marginBottom:10}}>
{['All','Unread','Favorites','Groups'].map(t=>(
<button key={t} style={{padding:'6px 14px',borderRadius:20,border:'none',background:t==='All'?'#0f0':'#222',color:t==='All'?'#000':'#fff'}}>{t}</button>
))}
</div>

{tab==='Chats' && (
<div>
<div style={{background:'#222',padding:10,borderRadius:10,marginBottom:10}}>🔍 Ask Meta AI or Search</div>
<div style={{background:'#1a1a1a',padding:12,borderRadius:10,marginBottom:8}}>📁 Archived — 1</div>
<div style={{padding:10,borderBottom:'1px solid #222'}}>👻 Ghost Bot: Turn your photo to scary ghost now!</div>
<div style={{padding:10,borderBottom:'1px solid #222'}}>💰 OPay Alert: ₦500 received from Ghost App</div>
</div>
)}
{tab==='Feed' && <div><h2>Feed — Like Facebook</h2><div style={{background:'#111',padding:15,borderRadius:10,marginTop:10}}>Post 1: Liger Ghost is trending! 👻<br/><button style={{marginTop:8,background:'#0f0',border:'none',padding:'6px 12px',borderRadius:10}}>Like</button></div></div>}
{tab==='Reels' && <div><h2>Reels — Like TikTok Status</h2><div style={{background:'#111',height:300,borderRadius:15,display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>▶️ Your Status Video Here</div></div>}
{tab==='Games' && <div><h2>Games — 50 Games Boys & Girls Love</h2><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:10}}>{Array.from({length:6}).map((_,i)=><div key={i} style={{background:'#111',padding:20,borderRadius:10,textAlign:'center'}}>🎮 Game {i+1}</div>)}</div></div>}
{tab==='Liger AI' && <div><h2>Liger AI — Like Startime Decoder</h2><div style={{background:'#111',padding:15,borderRadius:10,marginTop:10}}>📺 Live TV + Movies<br/>🤖 Ask AI anything</div><div style={{marginTop:15,background:'#000',padding:10,borderRadius:10,border:'1px solid #0f0'}}><b>Pay to Unlock:</b><br/>OPay: 8131286805<br/>Segun Ogunlade</div></div>}
</div>

<div style={{position:'fixed',bottom:0,left:0,right:0,background:'#111',display:'flex',justifyContent:'space-around',padding:'10px 0',borderTop:'1px solid #222'}}>
{[
{id:'Chats',icon:'💬'},
{id:'Feed',icon:'🏠'},
{id:'Reels',icon:'🎬'},
{id:'Games',icon:'🎮'},
{id:'Liger AI',icon:'✨'},
].map(b=>(
<button key={b.id} onClick={()=>setTab(b.id)} style={{background:'none',border:'none',color:tab===b.id?'#0f0':'#888',fontSize:12,textAlign:'center'}}>
<div style={{fontSize:20}}>{b.icon}</div>{b.id}
</button>
))}
</div>
</div>
)
}
