import React from 'react'

const snowCard = ({data} : {data:any}) => {
  return (
    <div>
      <div className='bg-[#A07EB9] h-90 w-110 rounded-4xl py-5'>
        <div className="bg-[#1A365D] h-75 w-95 rounded-3xl mx-5 py-3 px-3">
          <div className="bg-white w-30 h-10 text-4xl text-center">{data.heading}</div>
          <div className="h-25 my-5 text-white">{data.subText}</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <div className="w-auto bg-white rounded-3xl px-1">{data.feature1}</div>
              <div className="w-auto bg-white rounded-3xl px-1">{data.feature2}</div>
              {data.feature3 !== '' && (<div className="w-auto bg-white rounded-3xl px-1">{data.feature3}</div>)}
            </div>
            <div className="flex flex-wrap gap-2">
              {data.feature4 !== '' && (<div className="w-auto bg-white rounded-3xl px-1">{data.feature4}</div>)}
              {data.feature5 !== '' && (<div className="w-auto bg-white rounded-3xl px-1">{data.feature5}</div>)}
            </div>
          </div>
        </div>
        <div className="py-3 px-13"> Click Here</div>
      </div>
    </div>
  )
}

export default snowCard
