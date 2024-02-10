import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2}  dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-200 px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center '>
                    {data.close ? <IoClose size=".7em" color='rgb(255 255 255)' /> : <LuDownload size=".7em" color='rgb(255 255 255)' />}
                   
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                    <h3 className='text-sm flex items-center justify-center text-white'>{data.tag.tagTitle}</h3>
                </div>
            )} 
        </div>
    </motion.div>
  )
}

export default Card
