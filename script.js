// Variables
const brazilComponent = document.querySelector('#BR')
const navegateButton = document.querySelector('#start')
const popuptemplate = document.querySelector('#popup-template')

// Events
brazilComponent.addEventListener('click', showPopup)

// Functions
function showPopup(){
    const node = document.importNode(popuptemplate.content, true)

    document.body.appendChild(node)

    const popup = document.querySelector('.popup-container')

    popup.addEventListener('click', event => {
        popup.parentElement.removeChild(popup)
    })
}