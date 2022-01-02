//testing Class
import Contact from "../../../main/js/Contact.js";

let contact = new Contact();
contact.firstName = "Harry";
contact.lastName = "Xu";
contact.email = "harry@email";
contact.telephone = "416-1234567";
console.log(contact); //Contact {}.. can not see any private property
console.log(contact.firstName); //
console.log(contact.email);