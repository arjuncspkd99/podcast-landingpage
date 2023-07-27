import './Footer.css'
import { Button } from 'antd';
import fb from '../../assets/images/fb.svg'
import playstore from '../../assets/images/playstore.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'

const Frame5 = () => {
  const redirectToSpotify = () => {
    window.location.href = "https://www.spotify.com";
  };
  return (
    <div className='footer-div'>
      <div className="footer-text-div">
        <div className="text-div-heading">We have what you’re looking for</div>
        <div className="text-div-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</div>
        <Button onClick={redirectToSpotify} className='frame2-btn'>Get Started Now</Button>
      </div>
      <div className="footer-last-div">
        <a href="https://www.google.com">
          <span className='copyright'>All Right Reserved @Copyright 2023</span>
        </a>

        <div style={{ width: '276px', height: '18px', display: 'flex', justifyContent: 'space-between' }}>
          <a href="https://www.google.com">
            <span className='terms'>Terms of Service</span>
          </a>
          <a href="https://www.google.com">
            <span className='terms'>Privacy Policy</span>
          </a>
          <a href="https://www.google.com">
            <span className='terms'>Product</span>
          </a>

        </div>
        <div className='social'>
          <a href="https://www.facebook.com">
            <img src={fb} alt="" />
          </a>
          <a href="https://www.youtube.com">
            <img src={playstore} alt='' />
          </a>

          <a href="https://www.instagram.com">
            <img src={insta} alt='' />
          </a>

          <a href="https://twitter.com">
            <img src={twitter} alt='' />
          </a>

        </div>

      </div>
    </div>
  )
}

export default Frame5
