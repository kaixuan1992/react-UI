import ReactDOM from 'react-dom';
import React from 'react';
// import Button from './button';
import Icon from './icon'
  
const fn = ()=>{
  console.log('fn')
}
ReactDOM.render(
  <div>
    <Icon name="wechat"onClick={fn}/>
  </div>
,document.querySelector('#root')
)