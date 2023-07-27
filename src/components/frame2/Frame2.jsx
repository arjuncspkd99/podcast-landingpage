import './Frame2.css'
import { Button, Col, Row } from 'antd';
import pngwing from '../../assets/images/pngwing-1.png';
import { Card, Space } from 'antd';


const Frame2 = () => {
    return (
        <>
            <div className="pngwing">
                <img src={pngwing} alt="" />
            </div>
            <Row className='frame2' >
                <Col xs={24} sm={24} md={12} className='col-1' >
                    <div >
                        <Space direction="vertical" size={54}>
                            <Card
                                title="Interactive Features"
                                className='frame2-card '
                                headStyle={{
                                    width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#000000'
                                }}
                                bodyStyle={{
                                    width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: 'normal',
                                    marginTop: '-25px',
                                    padding: '21px',
                                    color: '#000000'
                                }}
                                bordered={false}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card>
                            <Card
                                title="Interactive Features"
                                className='frame2-card '
                                headStyle={{
                                    width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#000000'
                                }}
                                bodyStyle={{
                                    width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: 'normal',
                                    marginTop: '-25px',
                                    padding: '21px',
                                    color: '#000000'
                                }}
                                bordered={false}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card>
                        </Space>
                    </div>
                    <div style={{ marginLeft: '16px', marginTop: '23px' }}>
                        <Space direction="vertical" size={54}>
                            <Card
                                title="Interactive Features"
                                className='frame2-card '
                                headStyle={{
                                    width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#000000'
                                }}
                                bodyStyle={{
                                    width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: 'normal',
                                    marginTop: '-25px',
                                    padding: '21px',
                                    color: '#000000'
                                }}
                                bordered={false}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card>
                            <Card
                                title="Interactive Features"
                                className='frame2-card '
                                headStyle={{
                                    width: '268px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#000000'
                                }}
                                bodyStyle={{
                                    width: '250px', height: '30px', fontFamily: 'Poppins', fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: 'normal',
                                    marginTop: '-25px',
                                    padding: '21px',
                                    color: '#000000'
                                }}
                                bordered={false}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} className='col-2'>
                    <div style={{ justifyContent: 'center' }}>
                        <div className='frame2-hdg'>About the Course</div>
                        <div className='frame2-txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unkno</div>
                        <Button className='frame2-btn'>Explore Now</Button>
                    </div>

                </Col>
            </Row>
        </>

    )
}

export default Frame2
