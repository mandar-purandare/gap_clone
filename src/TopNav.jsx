import React from 'react'
import './TopNav.css'
import gap_small_logo from './images/gap_top_nav_logo.png'
import old_navy_logo from './images/old_navy_top_nav_logo.png'
import banana_republic_logo from './images/banana_repulic_top_nav_logo.png'
import athleta_logo from './images/athleta_top_nav_logo.png'
import baby_gap_logo from './images/baby_gap_top_nav_logo.png'
import top_nav_big_logo from './images/top_nav_big_logo.png'
import top_nav_big_logo_black from './images/gap_top_nav_big_logo_black.png'

function TopNav(props) {
    const topNavCategories = ['NEW','WOMEN','MEN','GIRLS','BOYS','TODDLER','BABY','MATERNITY','SALE','THE GIFT SHOP'];

    return (
        <div className='top-nav-container'>
            <div className='top-nav-upper'>
                <div className='top-nav-upper-left'>
                    <div><img src={gap_small_logo}/></div>
                    <div><img src={old_navy_logo}/></div>
                    <div><img src={banana_republic_logo}/></div>
                    <div><img src={athleta_logo}/></div>
                    <div><img src={baby_gap_logo}/></div>
                </div>
                <div className='top-nav-upper-centre'><p>Free Shipping on $50+ for Reward Members <span>SIGN IN OR JOIN</span> <span>DETAILS</span></p></div>
                <div className='top-nav-upper-right'>
                    <div className='top-nav-sign-in'>
                        <div>Sign In</div>
                        <div>Your Account<i class="fa-solid fa-chevron-down"></i></div>
                    </div>
                    <div className='top-nav-shopping-bag'>
                        <i class="fa-solid fa-bag-shopping fa-2xl"></i>
                    </div>
                </div>
            </div>
            <div className={`top-nav-lower ${props.class}`}>
                <div className='top-nav-lower-left'>
                    <div className='top-nav-lower-logo'>
                        {props.class == 'black-friday'? <img src={top_nav_big_logo_black}/>: <img src={top_nav_big_logo}/>}
                    </div>
                    <div className='top-nav-lower-options'>
                        {topNavCategories.map(caterogy => (
                           <div>{caterogy}</div> 
                        ))}
                    </div>
                </div>
                <div className='top-nav-lower-right'>
                    <div>
                        <input type='text' placeholder='Search:Jeans'/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopNav