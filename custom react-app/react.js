// import reactDOM from 'react-dom';
const root=document.querySelector('#root')
function customRender(element,container){
    const children=document.createElement(element.type)
    children.innerHTML = element.child
    for(const prop in element.props){
        children.setAttribute(prop,element.props[prop])
    }
    container.appendChild(children)
}
const reactElement={
    type:'a',
    props:{
        href:'https://reactjs.org',
        target: '_blank'
    },
    child:'click me to visit react'
}
customRender(reactElement,root)