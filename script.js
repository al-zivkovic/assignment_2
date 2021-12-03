let contactExample = {
    name: "Shawn Kemp",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com"
}

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
    div.appendChild(p);
    a.appendChild(div);
    a.href = 'page3.html';
    p.append(contact.name);
    div.classList.add('contact');
    main[0].appendChild(a);
};

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

document.querySelector('#contactshome').addEventListener('click', function(event) {
    cleanUpIndex();
    cleanUpCreate();
    cleanUpView();
    renderIndex(contactList);
    event.preventDefault();

});

/*VIEW PAGE */
function cleanUpView() {
    nodes = document.querySelectorAll('.contactinfo');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};

function renderView(contact) {
    let main = document.querySelectorAll('.main');

    let info = document.createElement('div');
    info.classList.add('contactinfo')

    let name = document.createElement('div')
    name.classList.add('contactname')
    info.append(contact.name)
    info.appendChild(name)
    
    let img = document.createElement('img')
    img.classList.add('profilepic')
    img.src = './img/profile.jpg'
    img.alt = 'Profile Picture'
    info.appendChild(img)
    
    let email = document.createElement('div')
    email.classList.add('contactemail')
    info.append('email:', contact.email)
    info.appendChild(email)
    
    let phone = document.createElement('div')
    phone.classList.add('contactphone')
    info.append('phone:', contact.phone)
    info.appendChild(phone)
    
    let address = document.createElement('div')
    address.classList.add('contactaddress')
    info.append('address:', contact.address)
    info.appendChild(address)
    
    let buttons = document.createElement('div')
    buttons.classList.add('buttons')
    info.appendChild(buttons)
    
    let edit = document.createElement('button')
    edit.classList.add('button')
    edit.classList.add('edit')
    edit.value = 'Close'
    edit.append('Close')
    buttons.appendChild(edit)
    
    let close = document.createElement('button')
    close.classList.add('button')
    close.classList.add('close')
    edit.value = 'Edit'
    edit.append('Edit')
    buttons.appendChild(close)

    img.appendChild(name)
    main[0].appendChild(info);
}



/*CREATE PAGE */
function cleanUpCreate() {
    nodes = document.querySelectorAll('.contactedit');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    };
};

function renderCreate(contact) {
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
    edit.appendChild(divForm)

    let form = document.createElement('form')

    let c1 = document.createElement('div')
    c1.classList.add('inputcontainer')
    form.appendChild(c1)

    let name = document.createElement('input')
    name.type = 'text'
    name.id = 'contactname'
    name.name = 'contactname'
    name.placeholder = 'Contact Name'
    name.value = contact.name
    c1.appendChild(name)
    
    let addName = document.createElement('button')
    addName.classList.add('extrafield')
    addName.id = "extranamefield"
    addName.name = 'extranamefield'
    addName.append('+')
    c1.appendChild(addName)

    let c2 = document.createElement('div')
    c2.classList.add('inputcontainer')
    form.appendChild(c2)

    let phone = document.createElement('input')
    phone.type = 'tel'
    phone.id = 'contactphone'
    phone.name = 'contactphone'
    phone.placeholder = 'Contact Phone'
    phone.value = contact.phone
    c2.appendChild(phone)

    let addPhone = document.createElement('button')
    addPhone.classList.add("extrafield");
    addPhone.id = "extraphonefield";
    addPhone.name = "extraphonefield";
    addPhone.append("+");
    c2.appendChild(addPhone);

    let c3 = document.createElement('div')
    c3.classList.add('inputcontainer')
    form.appendChild(c3)

    let address = document.createElement('input')
    address.type = "text";
    address.id = "contactaddress";
    address.name = "contactaddress";
    address.placeholder = "Contact Address";
    address.value = contact.address;
    c3.appendChild(address);

    let addAddress = document.createElement("button");
    addAddress.classList.add("extrafield");
    addAddress.id = "extraaddressfield";
    addAddress.name = "extraaddressfield";
    addAddress.append("+");
    c3.appendChild(addAddress);

    let c4 = document.createElement('div')
    c4.classList.add('inputcontainer')
    form.appendChild(c4)

    let email = document.createElement("input")
    email.type = "email";
    email.id = "contactemail";
    email.name = "contactemail";
    email.placeholder = "Contact Email";
    email.value = contact.email;
    c4.appendChild(email);

    let addEmail = document.createElement("button");
    addEmail.classList.add("extrafield");
    addEmail.id = "extraemailfield";
    addEmail.name = "extraemailfield";
    addEmail.append("+");
    c4.appendChild(addEmail);

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')
    form.appendChild(buttons)

    let save = document.createElement('button')
    save.classList.add("button");
    save.classList.add("save");
    save.type = "submit";
    save.id = "savecontact";
    save.name = "savecontact";
    save.append("Save Contact");
    buttons.appendChild(save);

    let discard = document.createElement('button')
    discard.type = "reset";
    discard.classList.add("button");
    discard.classList.add("save");
    discard.id = "cancel";
    discard.name = "cancel"
    discard.value = "Close";
    discard.append("Cancel");
    buttons.appendChild(discard);

    edit.appendChild(form)
    edit.appendChild(dImg)
    main[0].appendChild(edit)
};

document.querySelector('#newcontact').addEventListener('click', function(event){
    cleanUpCreate()
    cleanUpView()
    cleanUpIndex()
    renderCreate(contactList)
    event.preventDefault()
});

document.querySelector('.close').addEventListener('click', () => {
    cleanUpIndex()
    cleanUpCreate()
    cleanUpView()
    renderIndex(contactList)
});

document.querySelector('.cancel').addEventListener('click', function(event) {
    cleanUpCreate()
    renderIndex(contactList)
    event.preventDefault()
});