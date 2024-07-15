import {  ArrowRight, ChevronDown,  Link2, Loader2 } from 'lucide-react'
import React from 'react'
import event from "../../assets/bad_taks_front_page.png"
import { useNavigate } from 'react-router-dom'
export default function Landing() {
  const navigate = useNavigate()
  return (
    <>
 
    
    <div id='home' className=' flex flex-col px-4 md:flex-row gap-12
      items-center md:items-start md:justify-center justify-start  h-full md:h-[95vh] w-full relative '>

<span className='text-white/10 text-9xl absolute top-[10%] left-36 font-extrabold'>
BAD 

</span>
<span className='text-white/10 text-9xl absolute top-1/3 right-24 font-extrabold'>
TALK

</span>
<div className='w-full mx-auto md:h-72 md:w-auto aspect-video relative mt-24'>
<span className='h-[1px] w-24 bg-white absolute -top-4 -right-6'></span>
<img src={event} alt="Event"  className='h-[96] w-auto absolute'/>
<span className='h-[1px] w-24 bg-white absolute -bottom-4 -left-6'></span>

</div>


<div className='md:absolute md:bottom-44  md:left-4  lg:left-24 h-40 w-full md:w-96 '>
<ArrowRight  size={50} className=' -rotate-45'/>
<h3 className='pl-3 font-semibold text-xl'>Venue :</h3>
<p className=' max-w-xs lg:max-w-md pl-3 text-sm text-white/40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet cupiditate ducimus magni praesentium beatae asperiores perspiciatis magnam unde nam adipisci, suscipit labore autem.</p>
</div>
{/* card */}
<div className='h-full md:h-32  p-4 mb-40 md:mb-0 w-full md:w-96 bg-white rounded-3xl md:absolute relative  md:right-4  lg:right-24 md:bottom-44 '>
    <h3 className='text-black font-semibold text-xl'>Welcome...</h3>
    <p className='text-black/40 text-xs md:max-w-[310px] mt-1 leading-tight max-w-[230px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus, commodi consequuntur placeat consequatur iusto maxime dolore laudantium illo reprehenderit labore praesentium distinctio.</p>
    <div className="absolute h-16  w-16 bottom-0 rounded-tl-[30px] -right-4 flex items-center justify-center bg-black">
        <Link2 size={44} color='black' className='bg-white p-3 rounded-full mt-1' />
        <div className='h-4 w-4 bg-black  bottom-0  absolute -left-4 '>
        <div className='h-4 w-4 bg-white rounded-br-3xl  absolute -left-0 bottom-0 '>

        </div>

        </div>
        <div className='h-4 w-4 bg-black  -top-4  absolute right-4 '>
        <div className='h-4 w-4 bg-white rounded-br-3xl  absolute -left-0 bottom-0 '>

        </div>

        </div>
    </div>

</div>

{/* //footeer */}
        <div className='absolute bottom-0 h-24 w-full bg-white  left-0 right-0'>
            <div className='relative h-full w-full'>
                <div className='h-24 absolute w-24 rounded-full bg-black  -top-1/2 right-1/2 translate-x-1/2'>
                <a href='#whatisbad' className='absolute border-2 border-white cursor-pointer z-40 rounded-2xl flex items-center h-12 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2'>
                    <ChevronDown size={30} className='animate-bounce duration-1000 '/>
                </a>
                <div className='relative h-full w-full'>
                    <div className='absolute h-4 w-12 border-white border-b border-r bg-black top-1/2 right-1/2 translate-x-[195%]'>

                    </div>
                    <div className='absolute h-12 w-12 bg-white top-1/2 right-1/2 rounded-tl-2xl translate-x-[195%]'>

                    </div>

                    <div className='absolute h-4 w-12 bg-black border-white border-b border-l top-1/2 right-1/2 -translate-x-[95%]'>

                    </div>
                    <div className='absolute h-12 w-12 bg-white top-1/2 right-1/2 rounded-tr-2xl -translate-x-[95%]'>

                    </div>

                </div>
                
              

                </div>
                

            </div>
        </div>
      {/* hello world */}
    </div>
    </>
  )
}
