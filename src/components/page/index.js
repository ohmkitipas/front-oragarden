import React, {Component} from 'react';
import Banner1 from "../../picture/banner1.jpg";
import Banner2 from "../../picture/banner2.jpg";
import Banner3 from "../../picture/banner3.jpg";
import Banner4 from "../../picture/banner4.jpg";
import '../../App.css';
import { Layout, Carousel, Row, Col } from 'antd';
import NavBar from '../NavBar';
import FooterBar from '../Footer'
const { Header, Content, Footer } = Layout;

export default function index() {
    return (
    <Layout>
        <div>
          <NavBar />
        </div>   
      

      <Content>
      <Row justify ="center">
        <Col span = {24}>
        <Carousel autoplay >       
           <div><img src={ Banner1 } alt="gardenBanner"/></div>
           <div><img src={ Banner2 } alt="oragardenBanner" /></div>
           <div><img src={ Banner3 } alt="oragardenBanner" /></div>
           <div><img src={ Banner4 } alt="oragardenBanner" /></div>      
        </Carousel> 
        </Col>
      </Row>   
        
    </Content>

        <div>
            index page
        </div>
      <Footer>
           <FooterBar/>
      </Footer>
     </Layout>
    );
}
