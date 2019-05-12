import React from 'react'
import './icons/wechat.svg'
import './icons/icon_QQ.svg'
import './icons/alipay.svg'
import './importIcons'
interface IconProps{
  name:string;
}
 const Icon:React.FunctionComponent<IconProps>=(props)=>{
   return (
     <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use></svg>
     </span>
   )
}
export default Icon;