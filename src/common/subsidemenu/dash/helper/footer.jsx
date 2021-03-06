import react from 'react'
import { useNavigate } from 'react-router-dom'
import './Style.css'
import { BackTop } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';




export default function Footer() {


   
    return (
        <>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* <BackTop>  */}
                <div style={{ backgroundColor: '#374754', height: '7.5vh', width: '100%', justifyContent: 'center', display: 'flex' }}>
                 <a style={{width:'100%',backgroundColor:'#374754',display:'flex',justifyContent:'center',alignItems:'center',color:'white', fontSize:'16px'}} >Back To Top</a>
                </div>
                {/* </BackTop> */}


                <div style={{ backgroundColor: '#232f3e', height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: '', justifyContent: 'center', borderBottom: '1px solid white', flexWrap: 'wrap' }}>
                        <div className='hover1' style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', fontSize: '1vw', fontFamily: 'inherit' }}>
                            <h4 style={{color:'white', fontSize:'20px'}}>Get to Know Us</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5" >About Us</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Careers</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Press Releases</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazon Cares</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Gift a Smile</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazon Science</a>
                        </div>
                        <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', fontSize: '1vw', fontFamily: 'inherit' }}>
                            <h4 style={{color:'white', fontSize:'20px'}}>Connect with Us</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Facebook</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Twitter</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Instagram</a>
                        </div>
                        <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', fontSize: '1vw', fontFamily: 'inherit' }}>
                            <h4 style={{color:'white', fontSize:'20px'}}>Make Money with Us</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Sell on Amazon</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Sell under Amazon Accelerator</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazon Global Selling</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Become an Affiliate</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Fulfilmenet bt Amazon</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Advertise Your Products</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazone pay on Merchants</a>

                        </div>
                        <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', fontSize: '1vw', fontFamily: 'inherit' }}>
                            <h4 style={{color:'white', fontSize:'20px'}}>Let Us Help you</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">COVID-19 and Amazon</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Your Account</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Returns Centre</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">100% Purchase protection</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazon App Download</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Advertise Your Products</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Amazon Assistant Download</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Help</a>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#232f3e', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>

                        <div style={{ width: '80%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <div style={{ width: '22%' }}>
                                    <img className='header_logo' src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png' />
                                </div>
                                <div style={{ width: '20%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                                    <a href="" style={{border:'1px solid white',color:'white',display:'flex',justifyContent:'center',alignItems:'center',height:'50%',width:'10vw',fontSize:'1vw',gap:'20%'}}>  <GlobalOutlined />English</a>
                                  
                                </div>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '26px', flexWrap: 'wrap', paddingTop: '30px',paddingBottom:'20px' }}>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Australia</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Brazil</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Canada</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">China</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">France</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Germany</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Italy</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Japan</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Mevico</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Netheriands</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Poland</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Singapore</a>
                                <a id='over' href='#' style={{ color: 'white' }} class="ex5">Spain</a>
                            </div></div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#131921', height: '', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                            <h4 style={{ color: 'white' }}>AbeBooks</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Books,art</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">& Collection</a>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h4 style={{ color: 'white' }}>Amazone web Service</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Scalable cloud</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Computing Service</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h4 style={{ color: 'white' }}>Audible</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Download</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Audio Books</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h4 style={{ color: 'white' }}>DPReview</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Digital</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Photography</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h4 style={{ color: 'white' }}>IMDb</h4>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">Movies,TV</a>
                            <a id='over' href='#' style={{ color: 'white' }} class="ex5">& Celebrities</a>
                        </div>
                    </div>
                </div>
                </div>
                <div style={{ width: '100%', height: '', display: 'flex', justifyContent: 'center', backgroundColor: '#131921', paddingTop: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>

                        <a id='over' href='#' style={{ color: 'white' }} class="ex5">Conditions of Use & Sale</a>
                        <a id='over' href='#' style={{ color: 'white' }} class="ex5">Privacy notice</a>
                        <a id='over' href='#' style={{ color: 'white' }} class="ex5">Interest-Based Ads</a>

                        <h4 style={{ color: 'white' }}>@ 19996-2022, Amazone.com,inc. or its affiliates</h4>
                    </div>
                </div>
           

        </>
    )
}