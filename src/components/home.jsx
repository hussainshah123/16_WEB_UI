// import './App.css';

import { FaAngleDown } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineStarRate } from "react-icons/md";
import { RiSendPlane2Line, RiSendPlaneLine } from "react-icons/ri";

const Home = () => {
  return (<>
    <div className='Home'>
      <div className='heading'>
        <h1>
          Book <span> O16 Labs <br /> </span>
          for your<br />
          Dinner <span>Party</span>
        </h1>
        <p>We’re providing the best Chef booking platform. <br />
          Choose a menu and book your Chef instantly</p>
      
          <div className="MainCard">
        <div className="innerCard">
        <div className="icons">
          <p>select</p>
          <span><FaAngleDown/></span>
          </div>
          <p>al shams</p>
        </div>
        <div className="innerCard">
          <div className="icons">
          <p>select</p>
          <span><FaAngleDown/></span>
          </div>
          <p>al shams</p>
        </div>
        <div className="innerCard">
        <div className="icons">
          <p>select</p>
          <span><FaAngleDown/></span>
          </div>
          <p>al shams</p>
        </div>
        <div className="arrow">
          <span> <IoIosArrowForward color="white" width={30} /></span>
       
        </div>
      </div>


      </div>

      <div className="Container">
      <div className='imagess'>
        <img className='img1'
          src='src/assets/images/group.png'
        />
        <img className='img2'
          src='src/assets/images/juice.png'


        />
        <img className='img3'
          src='src/assets/images/bowl.png'
        />
        <img className='img4'
          src='src/assets/images/line.png'
        />
        <img className='img5'
          src='src/assets/images/rice.png'
        />


      </div>

      </div>
    </div>
  
    <div className="com"> 
      <div className="imagesss">
        <img src="src/assets/images/user1.jpg"   className="small1" />
        <img src="src/assets/images/user2.jpg" className="small2" />
        <img src="src/assets/images/user3.jpg" className="small3" />
        <img src="src/assets/images/user4.jpg" className="small4" />
        </div> 
      <div className="customer">
        <p className="our">our happry customer</p>
        <p><MdOutlineStarRate className="i" /> 8.2k reviews</p>

      </div> 
  <div className="visa">
        <img src="src/assets/images/visa.png" className="sm" />

      </div> 
     
     </div>
    
  </>)
}

export default Home;