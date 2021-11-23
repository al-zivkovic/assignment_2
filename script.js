/*INDEX PAGE */
function cleanUpIndex() {
    nodes = document.querySelectorAll('.contact');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};

function createSingleIndex(contact) {
    let main = document.querySelectorAll(".main");
    let a = document.createElement('a');
    let p = document.createElement('p');
    let div = document.createElement('div');
    a.appendChild(div);
    a.href = 'page3.html';
    p.appendChild(contact.name);
    div.appendChild(p);
    div.classList.add('contact');
    main[0].appendChild(a);
};

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
];

function renderIndex(contact) {
    var main = document.querySelectorAll('.main');
    for (let i = 0; i < contact.length; i++) {
        let a = document.createElement('a');
        let p = document.createElement('p');
        let div = document.createElement('div');
        a.appendChild(div);
        a.href = 'page3.html';
        p.append(contact[i].name);
        div.appendChild(p);
        div.classList.add('contact');
        main[0].appendChild(a);
    };
};

/*VIEW PAGE */
function cleanUpView() {
    nodes = document.querySelectorAll('.contactinfo');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};
cleanUpView()
function renderView(contact) {
    let main = document.querySelectorAll('.main');

    let info = document.createElement('div');
    info.classList.add('contactinfo')

    let name = document.createElement('div')
    name.classList.add('contactname')

    let img = document.createElement('img')
    img.classList.add('profilepic')
    img.src = './img/profile.jpg'
    img.alt = 'Profile Picture'

    let email = document.createElement('div')
    email.classList.add('contactemail')

    let phone = document.createElement('div')
    phone.classList.add('contactphone')

    let address = document.createElement('div')
    address.classList.add('contactaddress')

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let edit = document.createElement('button')
    edit.classList.add('button edit')

    let close = document.createElement('button')
    close.classList.add('button close')

    img.appendChild(name)
    main[0].appendChild(info);
    info.appendChild(name)
    info.appendChild(email)
    info.appendChild(phone)
    info.appendChild(address)
    info.appendChild(buttons)
    buttons.appendChild(edit)
    buttons.appendChild(close)
}

/*CREATE PAGE */
function cleanUpCreate() {
    nodes = document.querySelectorAll('.contactedit');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};


function renderCreate() {
    let main = document.querySelectorAll('.main')

    let edit = document.createElement('div')
    edit.classList.add('contactedit')

    let dImg = document.createElement('div')
    dImg.classList.add('contactimg')

    let img = document.createElement('img')
    img.classList.add('profilepic')
    img.src = "./img/profile.jpg"
    img.alt = 'Profile Picture'
    dImg.appendChild(img)
    
    let divForm = document.createElement('div')
    divForm.classList.add('form')

    let form = document.createElement('form')

    let c1 = document.createElement('div')
    c1.classList.add('inputcontainer')
    let 
}

renderCreate()