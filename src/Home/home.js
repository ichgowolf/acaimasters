import React, { Component } from 'react';
import acaiMastersLogo from './acaiMastersLogo.png';
import sambazonlogo from './sambazonlogo.png';


export class Home extends Component {
    render() {
        return(
<div class='all'>
<div class='body'>
  

      
  <img src= {acaiMastersLogo} alt='Acai Masters Logo'/>
    {/* <h1 class="top"> Acai Masters</h1> */}

    <h3 class='text'>
        Acai masters is 100% organic!
        <br /> Make it part of your daily diet
        <br /> Warrior up with Sambazon!
    </h3>





    <a href="https://postmates.com/merchant/acai-masters-cafe-miami" target="_blank"  rel="noopener noreferrer">
        <img src="https://postmates.com/assets/badges/pm-black-order.png" width="300px" alt="Order delivery from Postmates" />
    </a>

</div>



    {/* <button class="btn" onClick={() => styled.div } >Our diet special</button> */}

    <footer>
      <img src= {sambazonlogo} alt="sambazon logo we Proudly serve Sambazon Acai" />
      {/* <p>We Proudly Serve Sambazon Acai</p> */}
      <p>305-225-6275</p>
      <p>Leon@acaimasters.com</p>
    </footer>
</div>
        );
    }
}

export default Home;
