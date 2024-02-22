import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({ cards }) => {

    const card = new Array(cards).fill(0)
    // OR 
    // const card = Array.from({ length: cards })

    return (
        <>
            {
                card?.map((item, index) => {
                    return (
                        <div key={index} className='BoxComponent group w-[260px] sm:w-[310px] pb-1 shadow-lg shadow-black rounded-lg'>
                            <div className='relative overflow-y-hidden flex justify-center items-center'></div>
                            <div className='w-full sm:w-full h-[250px] flex flex-col justify-center items-center'>
                                <div className='hidden sm:block'>
                                    <Skeleton width={310} height={250} />
                                </div>
                                <div className='sm:hidden block'>
                                    <Skeleton width={260} height={250} />
                                </div>
                            </div>

                            <div className='border-[1px] border-t-0 overflow-hidden flex flex-col h-24'>
                                <div className=' flex flex-row justify-between h-full'>
                                    <h2 className='font-bold text-xl '>
                                        <Skeleton width={200} height={20} />
                                    </h2>
                                    <p className='font-sm'>
                                        <Skeleton width={40} height={20} />
                                    </p>
                                </div>
                                <p className='font-sm'>
                                    <Skeleton width={100} height={20} />
                                </p>
                            </div>
                        </div >
                    )
                })
            }

        </>
    )
}

export default CardSkeleton