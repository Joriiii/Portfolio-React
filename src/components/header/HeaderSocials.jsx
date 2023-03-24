import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/jord%C3%A1na-prusali-462a301b1/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Joriiii" target="_blank"><BsGithub/></a>
            <a href="https://www.instagram.com/jordana.prusali/" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials
