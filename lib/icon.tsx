import React from 'react'
import './icons/wechat.svg'
import './icons/icon_QQ.svg'
import './icons/alipay.svg'
import './importIcons'
import './icon.scss'
interface IconProps{
  name:string;
  onClick:() => void
}
 const Icon:React.FunctionComponent<IconProps>=(props)=>{
   return (
      <svg className="rui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
   )
}
export default Icon;