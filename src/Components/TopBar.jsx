import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const TopBar = () => {
  return (
    <div>
        <h1 className='text-gray-800 text-5xl ml-10 mt-5'>Best Website builders in the US</h1>
        <hr className='mt-2 border border-gray-300 border-b-1 my-4 '/>
       
        <div className='flex items-center gap-2'>

        <CheckCircleOutlineRoundedIcon className='text-gray-400 ' style={{ fontSize: '20px' }}/>
        <span className='text-gray-600 text-sm'>Last Updated - February 22,2020</span>

        <InfoOutlinedIcon className='text-gray-400 text-sm'style={{ fontSize: '20px' }} />
        <span className='text-gray-600'>Advertising Disclosure</span>

        

            <select name="" id="" className='ml-auto text-gray-700 text-sm'>
                <option value="Top Relevant" defaultChecked>Top Relevant</option>
                <option value="New">New</option>
                <option value="Last Month">Last Month</option>
            </select>

            </div>
        
            <hr className='mt-2 border border-gray-300 border-b-1 my-4 '/>

        {/* <div >
            <a href="/">Tools</a>
            <a href="/">Aws Builders</a>
            <a href="/">Start Build</a>
            <a href="/">Build Supplies</a>
            <a href="/">Tooling</a>
            <a href="/">Bluehosting</a>
        </div> */}

<div className="flex space-x-12">
  <a href="/" className="text-gray-600">Tools</a>
  <a href="/" className="text-gray-600">AWS Builders</a>
  <a href="/" className="text-gray-600">Start Build</a>
  <a href="/" className="text-gray-600">Build Supplies</a>
  <a href="/" className="text-gray-600">Tooling</a>
  <a href="/" className="text-gray-600">Bluehosting</a>
</div>

<div className="flex items-center mt-4 gap-1">
  <span className="mr-1 text-gray-600">Home</span>
  <ArrowForwardIosOutlinedIcon className="w-4 h-4"  style={{ fontSize: '12px' }} />
  <span className="mr-1 ml-1 text-gray-600">Hosting for all</span>
  <ArrowForwardIosOutlinedIcon className="w-4 h-4"  style={{ fontSize: '12px' }} />
  <span className="mr-1 ml-1 text-gray-600">Hosting</span>
  <ArrowForwardIosOutlinedIcon className="w-4 h-4"  style={{ fontSize: '12px' }} />
  <span className="mr-1 ml-1 text-gray-600">Hosting6</span>
  <ArrowForwardIosOutlinedIcon className="w-4 h-4"  style={{ fontSize: '12px' }} />
  <span className="mr-1 ml-1 text-gray-600">Hosting5</span>
</div>



    </div>
  )
}

export default TopBar