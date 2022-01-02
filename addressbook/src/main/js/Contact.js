export default class Contact {
    #id;
    #firstName;
    #lastName;
    #telephone;
    #email;

    constructor(firstName, lastName, telephone, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#telephone = telephone;
        this.#email = email;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get telephone() {
        return this.#telephone;
    }

    set telephone(value) {
        this.#telephone = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    set id(value) {
        this.#id = value;
    }

    get id() {
        return this.#id;
    }
}
