import './Frame3.css'
import { Radio, Button, Card, Col, Row } from 'antd';
import podcast from '../../assets/images/podcast.svg';
import spikes from '../../assets/images/spikelines.svg'
// import Radio from 'antd/es/radio';
import bullet from '../../assets/images/bullet.svg';
import Wbullet from '../../assets/images/bulletwhite.svg'

const Frame3 = () => {
    return (
        <div className='frame3'>
            <div className="podcast">
                <img src={podcast} alt="" />
            </div>
            <div className='frame3-topdiv'>
                <span className='frame3-heading '>Choose your plan</span>
                <span className='frame3-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </span>
                <div className='radio'>
                    <Radio.Button className='radio1' >Monthly</Radio.Button>
                    <Radio.Button className='radio2' >Yearly</Radio.Button>
                </div>
            </div>
            <div className='spikes'>
                <img src={spikes} alt='' className='img-spike' />
            </div>
            <Row className="plans" gutter={86}>
                <Col sm={24} md={8} className='card-col'>
                    <Card
                        title="Basic plan"
                        className='basicplan '
                        headStyle={{
                            width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#000000',
                            marginBottom: '16px',
                            border: 'none'
                        }}
                        bodyStyle={{
                            width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: 'normal',
                            marginTop: '-35px',
                            padding: '21px',
                            color: '#000000'
                        }}
                        bordered={false}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        <h3 style={{ marginTop: '24px', marginBottom: '24px', fontFamily: "Inter", fontSize: "32px", fontWeight: 700, color: "#7A3199" }}>$ 54 <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 400, color: "#7A3199" }}> /month  </span>   </h3>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; <b>Free access to video class</b></li>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; <b>Free access to video class</b></li>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; <b>Free access to video class</b></li>
                        <Button className='planbtn'>Start Free Trial</Button>
                    </Card>
                </Col>
                <Col sm={24} md={8} className='card-col'>
                    <Card
                        title="Basic plan"
                        className='premiumplan '
                        headStyle={{
                            width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#FFFFFF',
                            marginBottom: '16px',
                            border: 'none'
                        }}
                        bodyStyle={{
                            width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: 'normal',
                            marginTop: '-35px',
                            padding: '21px',
                            color: '#FFFFFF'
                        }}
                        bordered={false}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        <h3 style={{ marginTop: '24px', marginBottom: '24px', fontFamily: "Inter", fontSize: "32px", fontWeight: 700, color: "#FFFFFF" }}>$ 54 <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 400, color: "#FFFFFF" }}> /month  </span>   </h3>
                        <li><img src={Wbullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <li><img src={Wbullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <li><img src={Wbullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <Button className='premiumplanbtn'>Start Free Trial</Button>
                    </Card>
                </Col>
                <Col sm={24} md={8} className='card-col'>
                    <Card
                        title="Basic plan"
                        className='basicplan '
                        headStyle={{
                            width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#000000',
                            marginBottom: '16px',
                            border: 'none'

                        }}
                        bodyStyle={{
                            width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: 'normal',
                            marginTop: '-35px',
                            padding: '21px',
                            color: '#000000'
                        }}
                        bordered={false}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        <h3 style={{ marginTop: '24px', marginBottom: '24px', fontFamily: "Inter", fontSize: "32px", fontWeight: 700, color: "#7A3199" }}>$ 54 <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 400, color: "#7A3199" }}> /month  </span>   </h3>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <li><img src={bullet} alt='' />&nbsp;&nbsp;&nbsp; Free access to video class</li>
                        <Button className='planbtn'>Start Free Trial</Button>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Frame3
