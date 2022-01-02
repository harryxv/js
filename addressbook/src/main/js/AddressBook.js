//import Contact from "./Contact.js";

export default class AddressBook {
    #contacts = new Set();
    #nextId = 0;

    getContacts() {
        return this.#contacts;
    }

    clear() {
        this.#contacts.clear();
    }

    add(contact) {
        if (this.#contacts.has(contact)) {
            return false;
        }
        contact.id = this.#nextId++;
        this.#contacts.add(contact);
        return true;
    }

    list() {
        return this.#contacts;
    }
}
