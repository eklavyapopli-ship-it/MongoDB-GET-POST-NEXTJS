"use client"


import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
const [name, setName] = useState('')
const [link, setLink]= useState('')
interface ElementProp{
  e:string;
}
const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
try {
  const response = await axios.post('/api/datafiles', {name, link})
alert("data submitted")
} catch (error) {
  console.log(error)
  alert(error)
}

}

  return (
   <div className="max-w-lg mx-auto p-4 my-auto flex flex-col h-screen place-content-center"> 
    <h2 className="text-2xl font-bold mb-4 text-center">Create Data</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
    
      <div>
        <label className="block text-sm font-medium">File Name</label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter File Name" name="" id="" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"/>
      </div>
      <div>
        <label className="block text-sm font-medium">Link</label>
        <input onChange={(e)=>{setLink(e.target.value)}} type="text" placeholder="Enter Link" name="" id="" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"/>
      </div>
      <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md mt-10 hover:bg-white hover:text-black">Submit</button>
    </form>
   </div>
  );
}
