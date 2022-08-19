let addressBookObject = {};
let isUpdate = false;
window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validatePhone();
    validateAddress();
})

function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        try {
            let personData = new AddressBook();
            personData.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}
function validatePhone() {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        try {
            let personData = new AddressBook();
            personData.phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });
}

function validateAddress() {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        try {
            let personData = new AddressBook();
            personData.address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
}
//UC8 Ability to Add the Address Book Entry into an Address Book List and store it in Local Storage
const save = (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        let personAddressBook = setAddressBookObject();
        console.log(personAddressBook);
        createAndUpdateStorage(personAddressBook);
        alert("Data Stored With Name: " + personAddressBook._name);
        window.location.replace(Site_Properties.home);
    } catch (e) {
        console.log(e)
    }
}

const setAddressBookObject = () => {
    let addressBook = new AddressBook();

    addressBook.name = getInputValueId('#name');
    addressBook.phone = getInputValueId('#phone')
    addressBook.address = getInputValueId('#address')
    addressBook.city = getInputValueId('#city')
    addressBook.state = getInputValueId('#state');
    addressBook.zipcode = getInputValueId('#zipcode');
    addressBook.id = addressBookObject._id;
    return addressBook;
}
//UC8 Ability to Add the Address Book Entry into an Address Book List and store it in Local Storage
const createAndUpdateStorage = (personData) => {
    let dataList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (dataList) {
        let existingAddressData = dataList.find(data => data._id == personData.id);
        if (!existingAddressData) {
            personData.id = createNewBookId();
            dataList.push(personData);
        } else {
            const index = dataList.map(add => add._id).indexOf(personData.id);
            dataList.splice(index, 1, personData);
        }
    } else {
        personData.id = createNewBookId();
        dataList = [personData];
    }
    localStorage.setItem('AddressBookList', JSON.stringify(dataList));
}

const getInputValueId = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked == true) {
            setItem.push(item.value);
        }
    })
    return setItem;
}

const createNewBookId = () => {
    let bookId = localStorage.getItem('BookId');
    bookId = !bookId ? 1 : (parseInt(bookId) + 1).toString();
    localStorage.setItem('BookId', bookId);
    return bookId;
}