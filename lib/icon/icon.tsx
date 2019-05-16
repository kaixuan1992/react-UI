import React from 'react'
import './icons/wechat.svg'
import './icons/icon_QQ.svg'
import './icons/alipay.svg'
import '../importIcons'
import './icon.scss'
import classes from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
 const Icon:React.FunctionComponent<IconProps>=({className,name,...restProps})=>{
   return (
      <svg className={classes('rui-icon',className)}
            {...restProps}
      >
        <use xlinkHref={`#${name}`}></use>
      </svg>
   )
}
export default Icon;