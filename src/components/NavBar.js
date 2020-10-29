import React, { useState } from 'react';
import logo from '../picture/logo.jpg';
import MidMenu from './MidMenu';
import RightMenu from './RightMenu';
import '../App.css';
import { Drawer, Button, Menu, Row, Col } from 'antd';

export default function NavBar() {
    const [ visible, setVisible ] = useState(false);

    const showDrawer = (e) => {
      setVisible(true);
    };

    const onClose = (e) => {
      setVisible(false);
    };

    return (
             <nav className="menuBar">
               <div className="logo">
                 <img src= {logo} alt="oragarden" height="64" />
               </div>
               <div className="menuCon">
                 <div className="midMenu">
                   < MidMenu/>
                 </div>
                 <div className="rightMenu">
                   <RightMenu/>
                 </div>
                 <Button className="barsMenu" type="primary" onClick={showDrawer}>
                   <span className="barBtn"></span>
                 </Button>
                 <Drawer
                     title="ORAGARDEN"
                     placement="right"
                     closable={false}
                     onClose={onClose}
                     visible={visible}
                     >
                       <MidMenu/>
                       <RightMenu/>
                     </Drawer>

               </div>
             </nav>
    );
    }
/*<div>
        <Row>
              <Col>
                <div >
                  <img src={ logo } alt = "oragardenlogo" height="64" />
                </div>
              </Col>
              <Col>
                <div className="midMenu">
                   <MidMenu />
                </div>
              </Col>
              <Col>
                <div className="rightMenu">
                    <RightMenu />
                </div>
              </Col>
              <Button className="barsMenu" type="primary" onClick={showDrawer}>
                <span className="barBtn"></span>
              </Button>
              <Drawer
               title = "ORA GARDEN"
               placement = "right"
               closable = {false}
               onClose = {onClose}
               visible = {visible}
               >
                 <MidMenu />
                 <RightMenu />

               </Drawer>
        </Row>
      </div>*/

