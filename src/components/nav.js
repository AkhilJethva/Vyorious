import React from 'react'
import { Menu,Button,Image } from 'semantic-ui-react'
import "./nav.css";
import Eagle from "../images/eagle.png";

function nav() {
    return (
        <Menu secondary>
            <Menu.Item header > <Image src={Eagle} ></Image></Menu.Item>
          
            <Menu.Item header ><span class="font_orange"><h4>Vyorious</h4></span> </Menu.Item>
            <Menu.Item
            name='Why Vyorious?'/>
            <Menu.Item
            name='Solutions'/>
            <Menu.Item
            name='Product'/>
            <Menu.Item
            name='Use cases '/>
            <Menu.Item
            name='Team'/>
            <Menu.Item
            name='Partners'/>
            <Menu.Item
            name='Contact us'/>
          <Menu.Menu position='right'>
         
                <Menu.Item>
                    <Button color='orange' >Launch Vyorius </Button>
                </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default nav
