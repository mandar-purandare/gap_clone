import React from 'react'
import './Home.css'
import TopNav from './TopNav'
import black_friday_offer_wide from './images/black-friday-offer-wide.png'
import astrix_balloon from './images/astrix_balloon.png'
import sweaters from './images/sweaters.jpeg'
import sweats from './images/sweats.jpeg'
import tees from './images/tees.jpeg'
import pjs from './images/pjs.jpeg'
import Slider from './Slider'

import sweatshirt_jacket from './images/sweatshirt_jacket.jpg'
import wool_peacoat from './images/wool_peacoat.jpg'
import chambray_shirt from './images/chambray_shirt.jpg'
import snap_button_shirt from './images/snap_button_shirt.jpg'
import shepra_lined_shirt from './images/shepra_lined_shirt.jpg'

function Home() {
  const bodyNav = ['WOMEN','MATERNITY','MEN','GIRLS','BOYS','TODDLER GIRL','TODDLER BOY','BABY GIRL','BABY BOY'];
  const bigOfferCategories = [{img: sweaters, category:'Sweaters from $22', small_size:`Kids' and baby from $15`},
                              {img: sweats, category:'Sweats from $19', small_size:`Kids' and baby from $12`},
                              {img: tees, category:'Tees from $12', small_size:`Kids' and baby from $7`},
                              {img: pjs, category:'PJs from $15', small_size:`Kids' and baby from $10`}];
 const blackFridayDeals = [{img: sweatshirt_jacket, title:'Lined Utitility Sweatshirt Jacket'},
                           {img: wool_peacoat, title:'Wool Peacoat'},
                           {img: chambray_shirt, title:'Chambray Shirt'},
                           {img: snap_button_shirt, title:'Snap Button Utility Shirt'},
                           {img: shepra_lined_shirt, title:'Shepra-Lined Denim Utility Shirt with Washwell'}]
  return (
    <div className='home-container'>
        <TopNav class={'black-friday'}/>
        <div className='home-body'>
            <section className='black-friday-banner'>
                <div><img src={black_friday_offer_wide}/></div>
                <div><img src={astrix_balloon}/></div>
            </section>
            <div className='body-nav-and-offer-details'>
                <div className='body-nav'>
                    {bodyNav.map(category => (
                        <button>{category}</button>
                    ))}
                </div>
                <p>Applied at checkout. Excludes brand collaborations. <span className='underline'>DETAILS</span></p>
            </div>
            <div className='big-deals'><h2>60% Off Really Big Deals</h2><p>For wrapping and keeping</p></div>
            <section className='big-offer-categories white-border'>
                { bigOfferCategories.map(obj => (
                    <div className='big-offer-category-template white-border'>
                         <div className='big-offer-category-image white-border'><img src={obj.img}/></div>
                         <div className='category-name-and-button'>
                             <div className='category-name'>
                                 <h2>{obj.category}</h2>
                                 <p>{obj.small_size}</p>
                             </div>
                             <div className='shop-button white-border'><button>Shop Now +</button></div>
                         </div>
                     </div>
                ))}
            </section>
            <section className='black-friday-deals white-border'>
                    <Slider sliderTitle={`Black Friday Deals You'll Love`} sliderArray={blackFridayDeals} sliderClass={'home-page'}/>
            </section>
        </div>
    </div>
  )
}

export default Home