window.addEventListener('DOMContentLoaded', (event) => {
    validateInputs();
})

function validateInputs() {
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');
    const nameError = document.querySelector('.text-error');
    const phoneError = document.querySelector('.phone-error');
    const addressError = document.querySelector('.address-error');

    name.addEventListener('input', function() {
        try {
            let personData = new AddressBook();
            personData.name = name.value;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    });

    phone.addEventListener('input', function() {
        try {
            let personData = new AddressBook();
            personData.phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    address.addEventListener('input', function() {
        try {
            let personData = new AddressBook();
            personData.address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
}
