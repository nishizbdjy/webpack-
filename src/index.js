//引入样式
import './index.less';
import './style.css'
import img from './images/2.gif'
let box = document.createElement('div')
box.innerHTML = ` 
<div class="box">这是node代码 no</div>
<img src="${img}">
`
document.body.appendChild(box)//添加到 页面