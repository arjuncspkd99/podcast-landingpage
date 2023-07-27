/* eslint-disable react/prop-types */
import './Frame4.css'
import { Avatar, Card, Carousel, Rate } from 'antd';
import lolla from '../../assets/images/avatar.png'
// eslint-disable-next-line no-unused-vars
const contentStyle = {
    height: '160px',
    color: '#000000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#FFFFFF',
};
const { Meta } = Card;
const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        Previous
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
        Next
    </div>
);

function Frame4() {
    return (
        <>
            <div className='frame4div'>
                <div className='frame4txtdiv'>
                    <span>Review from customers </span>
                    <span className='smalltxt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
                </div>
            </div>
            <div className='carousel-container' >
                <Carousel
                    autoplay
                    slidesToShow={2}
                    slidesToScroll={1}
                    leftMode
                    variableWidth
                    dots
                    prevArrow={<CustomPrevArrow />}
                    nextArrow={<CustomNextArrow />}
                >
                    <div style={{ marginLeft: 0, }}>
                        <card className='carouselcard'>
                            <Meta
                                style={{ display: 'flex' }}
                                avatar={<Avatar src={lolla} style={{ width: '70px', height: '70px' }} />}
                                title={<div
                                    style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className='carouselcardheading'>Lolla Smith</span>
                                    <span style={{ marginLeft: '24px', marginTop: '-38px', fontFamily: 'poppins', fontSize: '14px', fontWeight: 400 }}>Microsoft</span>
                                    <span style={{ display: 'flex', marginLeft: '24px', marginTop: '0px' }}>
                                        {/* <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" /> */}
                                        <Rate />
                                    </span>
                                </div>}
                                description={<div className='carouseltxt '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>}
                            />
                        </card>
                    </div>
                    <div style={{ marginLeft: 0, }}>
                        <card className='carouselcard'>
                            <Meta
                                style={{ display: 'flex' }}
                                avatar={<Avatar src={lolla} style={{ width: '70px', height: '70px' }} />}
                                title={<div
                                    style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className='carouselcardheading'>Lolla Smith</span>
                                    <span style={{ marginLeft: '24px', marginTop: '-38px', fontFamily: 'poppins', fontSize: '14px', fontWeight: 400 }}>Microsoft</span>
                                    <span style={{ display: 'flex', marginLeft: '24px', marginTop: '0px' }}>
                                        {/* <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" /> */}
                                        <Rate />
                                    </span>
                                </div>}
                                description={<div className='carouseltxt '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>}
                            />
                        </card>
                    </div>
                    <div>
                        <card className='carouselcard'>
                            <Meta
                                style={{ display: 'flex' }}
                                avatar={<Avatar src={lolla} style={{ width: '70px', height: '70px' }} />}
                                title={<div
                                    style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className='carouselcardheading'>Lolla Smith</span>
                                    <span style={{ marginLeft: '24px', marginTop: '-38px', fontFamily: 'poppins', fontSize: '14px', fontWeight: 400 }}>Microsoft</span>
                                    <span style={{ display: 'flex', marginLeft: '24px', marginTop: '0px' }}>
                                        {/* <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" /> */}
                                        <Rate />
                                    </span>
                                </div>}
                                description={<div className='carouseltxt '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>}
                            />
                        </card>
                    </div>
                    <div>
                        <card className='carouselcard'>
                            <Meta
                                style={{ display: 'flex' }}
                                avatar={<Avatar src={lolla} style={{ width: '70px', height: '70px' }} />}
                                title={<div
                                    style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className='carouselcardheading'>Lolla Smith</span>
                                    <span style={{ marginLeft: '24px', marginTop: '-38px', fontFamily: 'poppins', fontSize: '14px', fontWeight: 400 }}>Microsoft</span>
                                    <span style={{ display: 'flex', marginLeft: '24px', marginTop: '5px' }}>
                                        {/* <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" /> */}
                                        <Rate />
                                    </span>
                                </div>}
                                description={<div className='carouseltxt '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>}
                            />
                        </card>
                    </div>
                    <div>
                        <card className='carouselcard'>
                            <Meta
                                style={{ display: 'flex' }}
                                avatar={<Avatar src={lolla} style={{ width: '70px', height: '70px' }} />}
                                title={<div
                                    style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className='carouselcardheading'>Lolla Smith</span>
                                    <span style={{ marginLeft: '24px', marginTop: '-38px', fontFamily: 'poppins', fontSize: '14px', fontWeight: 400 }}>Microsoft</span>
                                    <span style={{ display: 'flex', marginLeft: '24px', marginTop: '0px' }}>
                                        {/* <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" /> */}
                                        <Rate />
                                    </span>
                                </div>}
                                description={<div className='carouseltxt '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>}
                            />
                        </card>
                    </div>
                </Carousel>
            </div>
        </>

    )
}

export default Frame4
