function creElem(Heading, Class, Children) {
    let element = document.createElement(Heading);
    if (Class !== '')
        element.setAttribute('class', Class);
    Children.forEach(child=>{
        element.appendChild(child);
    })
    return element;
}

function handleNavbar() {
    
}