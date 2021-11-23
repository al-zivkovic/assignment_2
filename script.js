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
    for (let i = 0; contact.lenth; i++) {
        let main = document.querySelectorAll('.main');
        let info = document.createElement('div');
        info.classList.add('contactinfo')
        main[0].appendChild(info);
        let name = document.createElement('div')
        name.classList.add('contactname')
        info.appendChild(name)
        let img = document.createElement('img')
        img.appendChild(name)
        var email = document.createElement('div')
        email.classList.add('contactemail')
        info.appendChild(email)
        var phone = document.createElement('div')
        phone.classList.add('contactphone')
        info.appendChild(phone)
        var address = document.createElement('div')
        address.classList.add('contactaddress')
        info.appendChild(address)
        var buttons = document.createElement('div')
        buttons.classList.add('buttons')
        info.appendChild(buttons)
        var edit = document.createElement('button')
        edit.classList.add('button edit')
        buttons.appendChild(edit)
        var close = document.createElement('button')
        close.classList.add('button close')
        buttons.appendChild(close)
    }
};

/*CREATE PAGE */
function cleanUpCreate() {
    nodes = document.querySelectorAll('.contactedit');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};


function renderCreate() {
    
}

renderCreate()