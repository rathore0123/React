import React, {useContext} from 'react'
import GithubData from '../context/GithubDataContext'

function Card() {
    const {data, count, setCount} = useContext(GithubData);
    return (
        <div className='w-1/2 p-4 rounded-lg flex flex-col items-center justify-center bg-white gap-5'>
            <h2 className=' text-black text-md text-semibold underline'>GitHub Data Fetching through Api and transferring it using useContext Hook</h2>
            <div className="profile-Image w-1/2 rounded-[50%]">
                <img src={data.avatar_url} alt="Gihub Profile Image"
                className=' w-full rounded-[50%]' />
            </div>
            <h1 className='text-black text-3xl font-bold underline'>{data.name}</h1>
            <h2 className='text-gray-600 text-sm w-[80%]'>Bio: {data.bio}</h2>
        </div>
    )
}

export default Card