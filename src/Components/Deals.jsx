import React from 'react'

const Deals = () => {
  return (
    <>
    <h1 className=" text-3xl mt-20 ml-20" style={{color:"#2C384A"}}>Related deals you might like for</h1>
      <div className='flex flex-row gap-60 justify-center'>
       
        <div className='flex flex-col mt-10 w-40'>
            <div>
                <img src="./images/img_download_1.png" alt="" className='h-50 w-50 flex justify-center items-center ml-8 mb-5'  />
            </div> 
            <div className='flex flex-row  mt-5'>
            <button className=' rounded-xl border px-8 py-8 mr-2 h-2 flex justify-center items-center text-sm' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>20% Off</button>
            <button className=' rounded-xl border py-2 px-8 mr-2  w-50 h-15 flex justify-center items-center' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>Limited Time</button>
            </div>
            <span className='flex ml-12 mt text-gray-500 font-bold mt-4 '>Webbuilder 1</span>
            <p className='mt-2 w-48 mb-2 text-gray-700'>Computer Modern Classic with wix support.</p>
            <div className='flex flex-row'>
                <div className='mr-1 text-xl text-gray-600' >$39.46</div>
                <div className='mt-2 ml-1 line-through text-gray-500'>$49.96</div>
                <div className='mt-4 ml-1 text-xs text-red-500'>(20% Off)</div>
            </div>
            <button className=' block mt-5 px-2 py-2 bg-blue-500 text-white rounded-md w-60'>View Details</button>
        </div>
      
        <div className='flex flex-col mt-10 w-40'>
            <div>
                <img src="./images/img_download_1.png" alt="" className='h-50 w-50 flex justify-center items-center ml-8 mb-5'  />
            </div> 
            <div className='flex flex-row  mt-5'>
            <button className=' rounded-xl border px-8 py-8 mr-2 h-2 flex justify-center items-center text-sm' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>20% Off</button>
            <button className=' rounded-xl border py-2 px-8 mr-2  w-50 h-15 flex justify-center items-center' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>Limited Time</button>
            </div>
            <span className='flex ml-12 mt text-gray-500 font-bold mt-4 '>Webbuilder 2</span>
            <p className='mt-2 w-48 mb-2 text-gray-700'>Computer Modern Classic with wix support.</p>
            <div className='flex flex-row'>
                <div className='mr-1 text-xl text-gray-600' >$39.46</div>
                <div className='mt-2 ml-1 line-through text-gray-500'>$49.96</div>
                <div className='mt-4 ml-1 text-xs text-red-500'>(20% Off)</div>
            </div>
            <button className=' block mt-5 px-2 py-2 bg-blue-500 text-white rounded-md w-60'>View Details</button>
        </div>
      
        <div className='flex flex-col mt-10 w-40'>
            <div>
                <img src="./images/img_download_1.png" alt="" className='h-50 w-50 flex justify-center items-center ml-8 mb-5'  />
            </div> 
            <div className='flex flex-row  mt-5'>
            <button className=' rounded-xl border px-8 py-8 mr-2 h-2 flex justify-center items-center text-sm' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>20% Off</button>
            <button className=' rounded-xl border py-2 px-8 mr-2  w-50 h-15 flex justify-center items-center' style={{backgroundColor:"#F2F4F7",color:"#074786"}}>Limited Time</button>
            </div>
            <span className='flex ml-12 mt text-gray-500 font-bold mt-4 '>Webbuilder 3</span>
            <p className='mt-2 w-48 mb-2 text-gray-700'>Computer Modern Classic with wix support.</p>
            <div className='flex flex-row'>
                <div className='mr-1 text-xl text-gray-600' >$39.46</div>
                <div className='mt-2 ml-1 line-through text-gray-500'>$49.96</div>
                <div className='mt-4 ml-1 text-xs text-red-500'>(20% Off)</div>
            </div>
            <button className=' block mt-5 px-2 py-2 bg-blue-500 text-white rounded-md w-60'>View Details</button>
        </div>
      

    </div>

    </>
  )
}

export default Deals