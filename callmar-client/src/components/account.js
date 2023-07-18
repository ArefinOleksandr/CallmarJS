import React, { useState } from 'react';
import './style/styleAccount.css';
import Calls from './component/calls'
import Vidgets from './component/vidgets';
import Statistic from './component/statistic';

const callmar1 = require('./img/Callmar11.png')
function AccountPage() {
  const [content, setContent] = useState(<Calls />)

  
  const handleNavbarClick = (newContent) =>{
    setContent(newContent);
  }

    return (
      <>
      <NavBar onNavbarClick={handleNavbarClick}/>
      <Content content = {content} />
      </>
    );
}

const NavBar = ({onNavbarClick}) => {
  const [isButtonCallsClicked, setButtonCallsClicked] = useState(false);
  const [isButtonVidgetsClicked, setButtonVidgetsClicked] = useState(false);
  const [isButtonStatisticClicked, setButtonStatisticClicked] = useState(false);
  const handleClick = (newContent) => {
    onNavbarClick(newContent);
  }

  const change = (el) => {
    el.style.color = '#D75C78';
  }
  
  return (
    <nav>
      
      <img src={callmar1} alt=""/>
      <ul>
        <li><button onClick={() => {handleClick(<Calls />); 
        setButtonCallsClicked(true);
        setButtonVidgetsClicked(false);
        setButtonStatisticClicked(false)
      }
      } 
        style={isButtonCallsClicked ? {backgroundColor:'#D75C78'} : {}}>
          Звонки</button></li>
        <li><button onClick={() => {handleClick(<Vidgets />); 
        setButtonCallsClicked(false);
        setButtonVidgetsClicked(true);
        setButtonStatisticClicked(false)
      }
      } 
        style={isButtonVidgetsClicked ? {backgroundColor:'#D75C78'} : {}}>Виджеты</button></li>
        <li><button onClick={() => {handleClick(<Statistic />); 
        setButtonCallsClicked(false);
        setButtonVidgetsClicked(false);
        setButtonStatisticClicked(true)
      }
      } 
        style={isButtonStatisticClicked ? {backgroundColor:'#D75C78'} : {}}>Статистика</button></li>
      </ul>
    </nav>
  )
}

const Content = ({content}) => {
  return (<>{content}</>)
}

export default AccountPage;