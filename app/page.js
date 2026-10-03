"use client";
import { useState } from "react";
export default function Home(){
const [log,setLog]=useState(false);
const [tab,setTab]=useState("Chats");
const [f,setF]=useState({p:"",pw:""});
if(!log){
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",padding:20}}>
<h1 style={{textAlign:"center",color:"#0f0"}}>👻 LIGER GHOST</h1>
<div style={{background:"#111",padding:20,borderRadius:15,maxWidth:360,margin:"20px auto",border:"1px solid #333"}}>
<h3 style={{textAlign:"center"}}>Login</h3>
<input placeholder="Phone or Gmail" value={f.p} onChange={e=>setF({...f,p:e.target.value})} style={{width:"100%",padding:12,margin:"8px 0",background:"#222",color:"#fff",borderRadius:8,border:"1px solid #333"}}/>
<input type="password" placeholder="Password" value={f.pw} onChange={e=>setF({...f,pw:e.target.value})} style={{width:"100%",padding:12,margin:"8px 0",background:"#222",color:"#fff",borderRadius:8,border:"1px solid #333"}}/>
<select style={{width:"100%",padding:12,margin:"8px 0",background:"#222",color:"#fff",borderRadius:8}}><option>Nigeria</option><option>USA</option><option>UK</option><option>Ghana</option></select>
<select style={{width:"100%",padding:12,margin:"8px 0",background:"#222",color:"#fff",borderRadius:8}}><option>English</option><option>Yoruba</option><option>Hausa</option><option>Igbo</option></select>
<button onClick={()=>setLog(true)} style={{width:"100%",padding:14,background:"#0f0",color:"#000",border:"none",borderRadius:25,fontWeight:"bold",marginTop:10}}>ENTER APP 🚀</button>
<p style={{fontSize:11,color:"#0f0",marginTop:15,textAlign:"center"}}>OPay: 8131286805 - Segun Ogunlade - Verified ✅</p>
</div>
</div>
)
}
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",paddingBottom:70}}>
<div style={{background:"#111",padding:12,display:"flex",justifyContent:"space-between",borderBottom:"1px solid #222"}}>
<b style={{color:"#0f0"}}>👻 GHOST</b><span>🔍 🔔 ☰</span>
</div>
<div style={{padding:15}}>
{tab==="Chats"&&<div><div style={{background:"#222",padding:12,borderRadius:10}}>🔍 Ask Meta AI or Search</div><p style={{marginTop:20}}>💬 Chats ready! Startime decoder AI ready!</p></div>}
{tab==="Feed"&&<p>🏠 Feed - Facebook style posts</p>}
{tab==="Reels"&&<p>🎬 Reels - TikTok Status</p>}
{tab==="Games"&&<p>🎮 Games - 50 games loading...</p>}
{tab==="Liger AI"&&<div><p>✨ Liger AI Decoder</p><div style={{background:"#111",padding:12,borderRadius:10,marginTop:10,border:"1px solid #0f0"}}>Pay ₦500 to unlock HD<br/>OPay: 8131286805</div></div>}
</div>
<div style={{position:"fixed",bottom:0,left:0,right:0,background:"#111",display:"flex",justifyContent:"space-around",padding:"12px 0",borderTop:"1px solid #222"}}>
{["Chats","Feed","Reels","Games","Liger AI"].map(t=>(
<button key={t} onClick={()=>setTab(t)} style={{background:"none",border:"none",color:tab===t?"#0f0":"#888",fontSize:12,fontWeight:tab===t?"bold":"normal"}}>{t}</button>
))}
</div>
</div>
)
}
