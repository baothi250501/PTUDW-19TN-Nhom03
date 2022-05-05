function creElem(heading, attrs, children) {
    let element = document.createElement(heading);

    if (typeof(attrs) === 'string') {
        if (attrs !== '')
            element.setAttribute('class', attrs);
    }
    else
        attrs.forEach(attr=>element.setAttribute(attr.name, attr.value));

    try {
        children.forEach(child=>element.appendChild(child));
    }
    catch(err) {
        element.appendChild(children);
    }

    return element;
}

function handleNav(nav_list) {
    let ul = creElem('ul','navbar-nav m-auto mb-2 mb-lg-0',[]);
    nav_list.forEach(button=>{
        if (button.dropdown == undefined) {
            let name = document.createTextNode(button.name);
            let a = creElem('a',[
                {name:'class',value:'nav-link'},
                {name:'href',value:button.link}
            ],[name]);

            let li = creElem('li','nav-item',a);
            ul.appendChild(li);
        }
        else {
            let name = document.createTextNode(button.name);
            let a = creElem('a',[
                {name:'class',value:'nav-link dropdown-toggle'},
                {name:'href',value:'#'},
                {name:'id',value:'navbarDropdown'},
                {name:'role',value:'button'},
                {name:'data-bs-toggle',value:'dropdown'},
                {name:'aria-expanded',value:'false'}
            ],name);

            let subul = creElem('ul',[
                {name:'class',value:'dropdown-menu'},
                {name:'aria-labelledby',value:'navbarDropdown'}
            ],[]);
            button.dropdown.forEach(subbutton=>{
                let subname = document.createTextNode(subbutton.name);
                let suba = creElem('a',[
                    {name:'class',value:'dropdown-item'},
                    {name:'href',value:subbutton.link}
                ],subname);
                
                let subli = creElem('li','',[suba]);
                subul.appendChild(subli);
            })
            
            let li = creElem('li','nav-item dropdown',[a,subul]);
            ul.appendChild(li);
        }
    });
    let nav = creElem('div',[
        {name:'class',value:'collapse navbar-collapse'},
        {name:'id',value:'navbarSupportedContent'}
    ],ul);

    return nav;
}

function handleNavbar(mode) {
    // mode : ["guest","admin","manager","related-people"]
    let nav_list = [];
    if (mode === "admin") {
        nav_list = 
        [
            {
                name:"QUẢN LÝ",
                dropdown:
                [
                    {
                        name:"XEM DANH SÁCH",
                        link:"/admin/managers/list-manager-page.html"
                    },
                    {
                        name:"THÊM NGƯỜI QUẢN LÝ",
                        link:"/admin/managers/add-manager-page.html"
                    },
                    {
                        name:"LỊCH SỬ HOẠT ĐỘNG",
                        link:"/admin/managers/list-manager-history-page.html"
                    }
                ]
            },
            {
                name:"ĐỊA ĐIỂM",
                dropdown:
                [
                    {
                        name:"XEM DANH SÁCH",
                        link:"/admin/addresses/list-addresses-page.html"
                    },
                    {
                        name:"THÊM ĐỊA ĐIỂM",
                        link:"/admin/addresses/add-address-page.html"
                    }
                ]
            }
        ];
    }
    else if (mode === "manager") {
        nav_list = 
        [
            {
                name:"NGƯỜI LIÊN QUAN COVID-19",
                dropdown:
                [
                    {
                        name:"DANH SÁCH",
                        link:"/manager/related-people"
                    },
                    {
                        name:"THÊM NGƯỜI MỚI",
                        link:"/manager/related-people/add-new-one"
                    }
                ]
            },
            {
                name:"NHU YẾU PHẨM",
                dropdown:
                [
                    {
                        name:"GÓI SẢN PHẨM",
                        link:"#"
                    },
                    {
                        name:"SẢN PHẨM",
                        link:"/manager/products/product-list-page.html"
                    }
                ]
            },
            {
                name:"THỐNG KÊ",
                link:"#"
            },
            {
                name:"THANH TOÁN",
                link:"/manager/payment"
            }
        ];
    }
    else if (mode === "related-people") {
        nav_list = 
        [
            {
                name:"THÔNG TIN CÁ NHÂN",
                link:"/related-people/information.html"
            },
            {
                name:"NHU YẾU PHẨM",
                link:"/related-people/package-list.html"
            },
            {
                name:"TÀI KHOẢN",
                link:"#"
            }
        ];
    }

    

    let img = creElem('img',[
        {name:'class',value:'logo-img'},
        {name:'src',value:"/images/Logo.png"},
        {name:'alt',value:"logo"}
    ],[]);
    let a = creElem('a',[
        {name:'class',value:"navbar-brand"},
        {name:'href',value:"./"}
    ],img);
    
    let all_content = creElem('div','container-fluid',a);

    if (mode !== "guest") {
        let span = creElem("span","navbar-toggler-icon",[]);
        let button = creElem('button',[
            {name:'class',value:"navbar-toggler"},
            {name:'type',value:"button"},
            {name:'data-bs-toggle',value:"#navbarSupportedContent"},
            {name:'data-bs-target',value:"button"},
            {name:'aria-controls',value:"navbarSupportedContent"},
            {name:'aria-expanded',value:"false"},
            {name:'aria-label',value:"Toggle navigation"}
        ],span);

        let avt_img = creElem('img',[
            {name:'class',value:'rounded-circle'},
            {name:'src',value:"/images/avatar.jpg"},
            {name:'style',value:"width:50px;"}
        ],[]);
        let avt_button = creElem('button',[
            {name:'type',value:'button'},
            {name:'class',value:'avt btn rounded-circle'},
            {name:'data-bs-toggle',value:'dropdown'},
            {name:'aria-expanded',value:'false'}
        ],avt_img);

        let a1 = creElem('a',[
            {name:'class',value:'dropdown-item'},
            {name:'href',value:'#'}
        ],[document.createTextNode("ĐỔI MẬT KHẨU")]);
        let li1 = creElem('li','',a1);

        let a2 = creElem('a',[
            {name:'class',value:'dropdown-item'},
            {name:'href',value:'/'}
        ],[document.createTextNode("ĐĂNG XUẤT")]);
        let li2 = creElem('li','',a2);

        let ul = creElem('ul','dropdown-menu dropdown-menu-end', [li1, li2]);

        let avatar = creElem('div',[
            {name:'class',value:'btn-group'},
            {name:'style',value:'float:right'}
        ],[avt_button,ul]);

        let togglers = creElem('div',[{name:'id',value:'togglers'}],[button,avatar]);

        all_content.appendChild(togglers);
        all_content.appendChild(handleNav(nav_list));
    }


    let nav = document.querySelector("nav");
    nav.className = "navbar sticky-top navbar-expand-lg navbar-light bg-light";
    nav.appendChild(all_content);
}