function creElem(heading, attrs, children) {
    let element = document.createElement(heading);

    if (typeof(attrs) === 'string') {
        if (attrs !== '')
            element.setAttribute('class', attrs);
    }
    else
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }

    try {
        children.forEach(child=>element.appendChild(child));
    }
    catch(err) {
        element.appendChild(children);
    }

    return element;
}

function handleFooter() {
    let about_us_head = creElem('h3','', [document.createTextNode('VỀ CHÚNG TÔI')]);
    let about_us_content = creElem('p','', [document.createTextNode('CoCo là website quản lý danh sách người liên quan đến Covid-19, đồng thời cung cấp phương thức thanh toán trực tuyến để mua nhu yếu phẩm ở các địa điểm cách ly và điều trị.')]);
    
    let about_us = creElem('div','footer-box',[about_us_head,about_us_content]);

    let contact_head = creElem('h3','', [document.createTextNode('LIÊN HỆ')]);

    let span1 = creElem('span','fa-solid fa-phone', []);
    span1.setAttribute('style','margin-right:5px');
    let span2 = creElem('span','', [document.createTextNode('+84921360093')]);

    let contact1 = creElem('div','footer-contact',[span1,span2]);

    let span3 = creElem('span','fa-solid fa-envelope', []);
    span3.setAttribute('style','margin-right:5px');
    let span4 = creElem('span','', [document.createTextNode('coco@gmail.com')]);
    let logo = creElem('img','', []);
    logo.setAttribute('src','/images/Logo.png');
    logo.setAttribute('alt','logo');
    logo.setAttribute('style','width:200px;');
    
    let contact2 = creElem('div','footer-contact',[span3,span4,logo]);

    let contact_content = creElem('div','',[contact1,contact2]);

    let contact = creElem('div','footer-box',[contact_head,contact_content]);

    let footer_top = creElem('div','footer-top',[about_us,contact]);

    let hr = creElem('hr',{style:'border: 2px solid white;background-color: white; width: 98%; margin:1%'},[]);
    
    let span5 = creElem('span',{style:'float: left;'}, [document.createTextNode('Cùng nhau vượt qua Đại dịch Covid-19')]);
    let span6 = creElem('span',{style:'float: right;'}, [document.createTextNode('2022')]);

    let slogan = creElem('div','footer-bottom-slogan',[span5,span6]);

    let footer_bottom = creElem('div','footer-bottom',[hr,slogan]);

    let footer = document.querySelector('footer');
    footer.setAttribute('class','footer')
    footer.appendChild(footer_top);
    footer.appendChild(footer_bottom);
}