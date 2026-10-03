"use client"
import { useState } from 'react';
export default function Home(){
  const [photo,setPhoto]=useState<string|null>(null);
  const [text,setText]=useState("I SAW YOU LAST NIGHT...");
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState<string|null>(null);
  const [paid,setPaid]=useState(false);
  const gen=()=>{ if(!photo) return alert("Upload photo first KING!"); setLoading(true); setTimeout(()=>{setResult(photo); setLoading(false)},2000); };
  return(
    <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:'15px',textAlign:'center',fontFamily:'sans-serif'}}>
      <h1 style={{color:'red',fontSize:'26px',fontWeight:'bold'}}>KING LGR 👻 GHOST APP</h1>
      <p style={{color:'#0f0',fontSize:'13px'}}>VIRAL TIKTOK GHOST GENERATOR</p>
      <div style={{border:'2px dashed #333',padding:'15px',margin:'15px 0',borderRadius:'10px'}}>
        <input type="file" accept="image/*" onChange={e=>{ const f=e.target.files?.[0]; if(f){ const r=new FileReader(); r.onload=()=>setPhoto(r.result as string); r.readAsDataURL(f); }}} />
        {photo && <img src={photo} style={{width:'100%',maxWidth:'300px',marginTop:'10px',borderRadius:'10px'}} />}
      </div>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Ghost text..." style={{padding:'12px',width:'90%',background:'#111',color:'#fff',border:'1px solid #333',borderRadius:'8px'}} />
      <button onClick={gen} style={{display:'block',width:'90%',margin:'15px auto',padding:'15px',background:'red',color:'#fff',border:'none',borderRadius:'8px',fontWeight:'bold',fontSize:'16px'}}>{loading?"SUMMONING GHOST...":"GENERATE GHOST PHOTO 👻"}</button>
      {result && (
        <div style={{background:'#111',padding:'15px',borderRadius:'10px',marginTop:'15px'}}>
          <h2>GHOST PHOTO READY!</h2>
          <div style={{position:'relative',display:'inline-block'}}>
            <img src={result} style={{width:'100%',maxWidth:'350px',filter:'brightness(0.7) contrast(1.2)'}} />
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'#fff',fontSize:'22px',fontWeight:'bold',textShadow:'0 0 10px red',opacity:0.85}}>{text}</div>
          </div>
          {!paid?(
            <div style={{marginTop:'15px',border:'2px solid gold',padding:'15px',borderRadius:'10px',background:'#000'}}>
              <p style={{fontWeight:'bold'}}>🔒 PAY ₦500 TO DOWNLOAD HD + NO WATERMARK</p>
              <p style={{fontSize:'24px',fontWeight:'bold',color:'#0f0',margin:'10px 0'}}>OPay: 8131286805</p>
              <p style={{color:'gold'}}>Segun Ogunlade</p>
              <button onClick={()=>setPaid(true)} style={{marginTop:'12px',padding:'12px 20px',background:'gold',color:'#000',border:'none',borderRadius:'6px',fontWeight:'bold'}}>I HAVE PAID - UNLOCK NOW 🔓</button>
            </div>
          ):(
            <div style={{marginTop:'15px'}}>
              <p style={{color:'#0f0',fontWeight:'bold',fontSize:'18px'}}>✅ PAYMENT CONFIRMED KING!</p>
              <a href={result} download="KING-LGR-GHOST.jpg" style={{display:'inline-block',marginTop:'10px',padding:'14px 28px',background:'#0f0',color:'#000',textDecoration:'none',borderRadius:'8px',fontWeight:'bold'}}>DOWNLOAD HD PHOTO 📥</a>
            </div>
          )}
        </div>
      )}
      <div style={{marginTop:'30px',fontSize:'11px',color:'#555'}}><p>© 2026 KING LGR GHOST APP - Ibadan</p><p>OPay 8131286805 | Segun Ogunlade</p></div>
    </div>
  )
}
