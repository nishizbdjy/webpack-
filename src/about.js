import jquery from './utils/jquery'//实验引用
//多个入口
let dd = document.createElement('h1')
dd.innerHTML = `
第二个
`
let er = document.querySelector('.er')
er.appendChild(dd)