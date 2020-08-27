const brazilComponent = document.querySelector('#BR')
const navegateButton = document.querySelector('#start')

brazilComponent.addEventListener('click', event => {
    
    const popuptemplate = document.querySelector('#popup-template')
    const node = document.importNode(popuptemplate.content, true)

   document.body.appendChild(node)

})