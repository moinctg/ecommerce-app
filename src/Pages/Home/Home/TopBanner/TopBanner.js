import React from 'react';
import { Button } from 'react-bootstrap';

const TopBanner = () => {
    return (
            <div className="container mt-5">
            <div style={{alignItems:'center'}} className="row g-3">
                <div className="col-md-6">
                    <h3 style={{fontSize:'46px',color:'#000000'}}>Top Designers Pick</h3>
                    
                    <p style={{fontSize:'14px',color:'#000000',width:'432px',padding:'10px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
                    <Button variant="warning">SHOP NOW !</Button>
                    <div className='clock'>
                        <p>50% Discount Till</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <img  src='https://i.ibb.co/mBWJHCv/cloth1.png'></img>
                    <img src="https://i.ibb.co/HCgzZh6/Banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;