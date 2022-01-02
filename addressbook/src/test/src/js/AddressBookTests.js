//test
import Contact from "../../../main/js/Contact.js";
import AddressBook from "../../../main/js/AddressBook.js";

const addressBook = new AddressBook();
let contact = new Contact();
contact.firstName = "Harry";
contact.lastName = "Xu";
contact.email = "harry@email.com";
contact.telephone = "416-1234567";
addressBook.add(contact);

const contacts = addressBook.list();
contacts.forEach((contact) => {
    console.log(contact.firstName);
    console.log(contact.lastName);
    console.log(contact.email);
    console.log(contact.telephone);
})
