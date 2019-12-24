//引入样式
import './index.less';
import './style.css'
let box = document.createElement('div')
box.innerHTML = ` 
<div class="box">这是node代码 no</div>
`
document.body.appendChild(box)//添加到 页面