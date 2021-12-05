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

let renderCreate = function () {
  let main = document.querySelector('.main');
  let template = `
    <div class="contactedit">
      <div class="contactimg">
          <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
      </div>
      <div class="form">
          <form>
              <div class="inputcontainer">
                  <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                  <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
              </div>

              <div class="inputcontainer">
                  <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                  <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
              </div>

              <div class="inputcontainer">
                  <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                  <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
              </div>
              
              <div class="inputcontainer">
                  <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                  <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
              </div>

              <div class="buttons">
                  <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                  <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
              </div>
          </form>
      </div>
    </div>
  `
 main.innerHTML = template;


 document.querySelector('.save').addEventListener('click', () => {
    let fields = {
        name: "",
        phone: "",
        address: "",
        email: ""
    }

    fields.name = document.getElementsByName('contactname')[0].value;
    fields.phone = document.querySelector('#contactphone').value;
    fields.address = document.querySelector('#contactaddress').value;
    fields.email = document.querySelector('#contactemail').value;

    console.log(fields)
});

 document.querySelector('.cancel').addEventListener('click', function(event) {
    cleanUpCreate()
    renderIndex(contactList)
    event.preventDefault()
});


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



