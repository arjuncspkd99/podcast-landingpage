import './App.css'
import Navbar from './components/navbar/navbar';
import Frame1 from './components/frame1/Frame1';
import Frame2 from './components/frame2/Frame2';
import Frame3 from './components/frame3/Frame3';
import Frame4 from './components/frame4/Frame4';
import Frame5 from './components/footer/Footer.jsx';
// import Topimg from './assets/images/Group-80.png';
import { useState } from 'react';




function App() {
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <div className="container">
        {/* <div style={{display:'flex',maxWidth:'100vw', border:'5px solid yellow'}}>
          <img src= {Topimg} style={{zIndex:0,maxWidth:'97vw'}} alt=''/>
          <Navbar className='navbar-overlay' menuItems={["About", "Pricing", "Review"]} />
        </div> */}
        <Navbar menuItems={["About", "Pricing", "Review"]} />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
      </div>

    </>
  )
}

export default App
