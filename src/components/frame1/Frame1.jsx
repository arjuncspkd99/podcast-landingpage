import './Frame1.css'
import { Button, Col, Row } from 'antd';
import DotSquare from '../../assets/images/dot-square.svg'
import Image1 from '../../assets/images/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime-1.png'
import Image2 from '../../assets/images/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office-1.png'
import mic from '../../assets/images/mic.png'
// import earphones from '../../assets/images/earphones.png'
import earphones from '../../assets/images/earphone.svg'


const Frame1 = () => {
    return (
        <Row className='frame1' >
            <Col xs={24} sm={24} md={24} lg={12} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div className='frame1-text'>Learn how to launch a successful podcast</div><br />
                <div className='frame1-text2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</div>
                <Button className='btn'>Sign up Now</Button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} style={{ position: 'relative', paddingLeft: '35px', paddingTop: '40px' }}>
                <div className='frm1-img' style={{ display: 'flex' }}>
                    <img className='dot-square' src={DotSquare} alt='' />
                    <img className='pod-cast' src={mic} alt='' />
                    <img className='ear-phone' src={earphones} alt="" />
                    <div className='overlay_img'>
                        <img className='frame1-img1' src={Image1} alt='' />
                        <img className='frame1-img2' src={Image2} alt='' />
                    </div>


                </div>
            </Col>
        </Row>
    )
}

export default Frame1
