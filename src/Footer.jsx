import React from 'react'
import './Footer.css'
import your_choice from './images/your_choice.png'

function Footer() {
    const footerLists = [{title:'SEE IT FIRST', list_itmes:[<div className='join-gap'><input placeholder='Enter your email address' type='email'/><button>JOIN</button></div>,'PRIVACY POLICY']},
                         {title:'CUSTOMER SUPPORT', list_itmes:['Customer Service','Buy Online. Pick Up In-Store.','Store Locator','GapCash','GiftCards']},
                         {title:'GAP GOOD REWARDS', list_itmes:['Join Gap Good Rewards','Apply for a Credit Card','My Rewards & Benifits','Pay Credit Card Bill','Learn More']},
                         {title:'ABOUT US', list_itmes:['Our Values','Sustainability','Equality and Belonging','Careers','Get the App']}];

  return (
    <div className='footer-container'>
        <div className='footer-lists'>
            {footerLists.map(obj => (
                <div className='footer-list-template'>
                    <p>{obj.title}</p>
                    {obj.list_itmes.map(item => (
                        <ul><li>{item}</li></ul>
                    ))}
                </div>
            ))}
        </div>
        <div className='footer-bottom-text'>
            <p>© 2023 THE GAP, INC. | <span>PRIVACY POLICY</span> 
                                   | <span className='privacy-choices'>YOUR PRIVACY CHOICES <img src={your_choice}/></span> 
                                   | <span>YOUR CALIFORNIA PRIVACY RIGHTS</span> 
                                   | <span>CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT</span> 
                                   | <span>TERMS OF USE</span> 
                                   | <span>CAREERS</span> 
                                   | <span>SUSTAINABILITY</span> 
                                   | <span>ABOUT GAP INC.</span> </p>
            <p><span>AMERICANS WITH DISABILITIES ACT</span>|<span>GAP INC. POLICIES</span></p>
        </div>
    </div>
  )
}

export default Footer