import React from 'react'
import {Link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    return(
        <div className='bg-slate-900 text-white text-xl font-semibold flex justify-start items-center px-10 py-2 w-screen h-12'>
            <div className=' flex gap-8 justify-center items-center w-fit py-2'>
                <Link><InstagramIcon /></Link>
                <Link><LinkedInIcon /></Link>
                <Link><FacebookIcon /></Link>
                <Link><GitHubIcon /></Link>
            </div>
        </div>
    )
}