let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHTML();
    //localStorage.removeItem("edit-person");
});


const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHTML = () => {

    const headerHtml = `<tr>
    <th>Fullname</th>
    <th>Phone Number</th>
    <th>City</th>
    <th>State</th>
    <th>Zipcode</th>
    <th>Address</th>
    <th>Actions</th>
</tr>`;
    //if (addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    //let innerHtml = `${headerHtml}
    //let addressBookList = createEmployeePayrollJson();
    for (const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
<tr>
    <td>${addressBookData._name}</td>
    <td>${addressBookData._phone}</td>
    <td>${addressBookData._address}</td>
    <td>${addressBookData._city}</td>
    <td>${addressBookData._state}</td>
    <td>${addressBookData._zipcode}</td>
    <td>
    <img alt="edit" src="../assets/create-black-18dp.svg">
    <img alt="delete" src="../assets/delete-black-18dp.svg">
    </td>
</tr> 
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}