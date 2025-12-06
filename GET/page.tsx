"use client"
import { useState, useEffect } from "react"
import { Josefin_Sans } from 'next/font/google'
import { motion, number } from "framer-motion"
const josefin = Josefin_Sans({
  subsets: ['latin'],
})

interface ResourceItem {
    _id: string;
    name: string;
    link: string;
    
}

const GetData = () => {
    const [data, setData] = useState<ResourceItem[]>([]);
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/reviews");

            const json = await res.json();
            setData(json)
        };
        fetchData();


    }, [])
    
    const displayData = data;
    
    return (


        <div className={`max-w-7xl mx-auto h-fit mt-20 ${josefin.className} flex flex-col justify-center place-items-center`}>
            <h1 className={`md:text-5xl text-3xl text-center font-bold text-black ${josefin.className}`}>STUDENT <span className="text-blue-600">REVIEWS</span></h1>
            <div className=" mt-20 lg:grid lg:grid-cols-2 gap-x-10 gap-y-20  place-items-center flex flex-col">
                {limitedData.map((item) => (
                    <motion.div
                    whileHover={{scale:1.03}}
                     key={item._id} className={`md:h-60 h-fit  p-10 md:w-150 gap-y-10 w-fit m-1 border-black rounded-2xl hover:shadow-xl flex flex-col relative shadow-md text-black ${josefin.className}`}>
                        <div className="flex place-items-end place-content-start flex-1 w-full gap-6"><img src="/userIcon.png" alt="" className="h-20 w-22" />
                       <div className="mb-1"> <div className="md:text-xl">Name: {item.name}</div>
                       <div className="md:text-md text-sm text-gray-700">Course: {item.course}</div>
                       </div>
                        </div>
                        <div className="text-center flex flex-col flex-1 place-content-center  text-sm">"{item.review}"</div>
                    </motion.div>
                ))}
            </div>
            <div className="m-20 text-center text-xl text-blue-600 font-semibold cursor-pointer w-fit group relative"
             onClick={()=>{
                if(showAll==false)
                    {setShowAll(true)}
                else
                {setShowAll(false)}}
                }>{text}
                <div className="absolute scale-x-0 group-hover:scale-x-100 -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-blue-600 duration-300 ease-out"></div></div>
        </div>
    )
}

export default GetData;