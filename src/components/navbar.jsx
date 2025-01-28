// import './App.css'


const Navbar = () => {
    return (<>
    <div className='navbar'>
            <div className='image'>
              <img
                src='src/assets/images/log.png'
                style={{ width: "60px", height: "60px", marginLeft: "40px" }}
              />
            </div>
            <div className='link'>
              <a href='home'>Home</a>
              <a href='home'>How it Works</a>
              <a href='home'>Our Chefs</a>
              <a href='home'>Book</a>
    
            </div>
            <div className='user'>
              <a href=''>Login    </a>
              <a href=''>Signup</a>
    
            </div>
          </div>
    </>)
}

export default Navbar;