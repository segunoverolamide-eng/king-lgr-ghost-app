"use client";
import { useState } from "react";
export default function Home(){
const [photo,setPhoto]=useState<string|null>(null);
const [ghost,setGhost]=useState(0.5);
return(
<div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:'20px',textAlign:'center'}}>
<h1 style={{color:'red',fontSize:'30px'}}>👻 KING LGR GHOST APP</h1>
<p style={{color:'#0f0'}}>Turn any photo to scary ghost!</p>
<div style={{border:'2px dashed #555',padding:'20px',borderRadius:'15px',margin:'20px 0'}}>
<input type="file" accept="image/*" onChange={e=>{
const f=e.target.files?.[0];
if(f){const r=new FileReader();r.onload=()=>setPhoto(r.result as string);r.readAsDataURL(f);}
}} />
</div>
{photo && (
<div>
<div style={{position:'relative',display:'inline-block'}}>
<img src={
