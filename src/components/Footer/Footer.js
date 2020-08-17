import React from 'react';
import twitterIcon from '../../images/icons/twitterIcon.png'
import pinterestIcon from '../../images/icons/pinterestIcon.png'
import instagramIcon from '../../images/icons/instagramIcon.png'
import facebookIcon from '../../images/icons/facebookIcon.png'

const Footer = () => {
    return (
        <div className='bg-white border border-top-gray-400 mt-5'>
            <div className='flex py-5 justify-center'>
                <img src={pinterestIcon} className='h-12 mx-2' alt='pinterest icon'></img>
                <img src={facebookIcon} className='h-12 mx-2' alt='facebook icon'></img>
                <img src={twitterIcon} className='h-12 mx-2' alt='twitter icon'></img>
                <img src={instagramIcon} className='h-12 mx-2' alt='instagram icon'></img>
            </div>
        </div>
    )
}

export default Footer
