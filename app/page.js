"use client";
import { useRef, useState } from 'react';
import {apStyleTitleCase} from 'ap-style-title-case'

export default function Home() {
  let inputRef = useRef("")
  let resultRef = useRef()
  // const [text, setText] = useState("");
  const [error, setError] = useState("");
  function handleInput(){
    var breakLine = inputRef.current.value.split("\n").map(e=>{return apStyleTitleCase(e.toLowerCase())}).join("<br/>")
    // console.log(apStyleTitleCase(inputRef.current.value));
    //  setText(apStyleTitleCase(inputRef.current.value))
    document.querySelector("#result").innerHTML=breakLine;
    if(breakLine.length==0 ||breakLine ==""){
      document.querySelector("#result").innerHTML="Empty!";
      document.querySelector("#getInput").innerHTML="Empty!";
    }
    document.querySelector("#getInput").innerText = inputRef.current.value;
     setError("Writing...")
  }


function handleKey(e){
    if ((e.ctrlKey || e.metaKey) && e.key == "c") {
      // Do stuff.
    navigator.clipboard.writeText(document.querySelector("#result").innerText);
    setError("Copied to Clipboard!")
    if(inputRef.current.value == ""){
      document.querySelector("#getInput").innerHTML="Empty!";

    }
    
    inputRef.current.value = "";
   }
  }
  return (
    <main onKeyDown={handleKey} className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="text-5xl">APA Style Title Case Tool</h1>
      <p className="text-slate-500 mb-4">write your text or Paste the input on the textarea by using Ctrl+V</p>
      <form action="">
        <textarea ref={inputRef} onChange={handleInput} name="input-text" id="input-text" cols="80" rows="10"></textarea>
    </form>
    <p className="text-slate-500 mb-4">Direct Copy your result by pressing Ctrl + C</p>
    <p className='p-2 text-green-800 bg-green-400 mb-5'>{error==""?"Write your Text!":error}</p>
    <div className='flex gap-10'>

    <div className="text-lg bg-gray-800 p-10">

    <p className="text-3xl text-white">Input:</p>
    <p id="getInput">Empty!</p>
    </div>
    <div className="text-lg bg-gray-800 p-10">
    <p className="text-3xl text-white">Result:</p>
    <p id="result" style={{whiteSpace:"pre-line"}}>Empty!</p>
    </div>
    </div>
    </main>
  )
}
