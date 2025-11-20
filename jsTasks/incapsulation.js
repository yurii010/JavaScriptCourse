class User {
    constructor(name, age, surname) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }

    #surname = this.surname;
    get surname() {
        return this.#surname;
    }

    set surname(newSurname) {
        this.#surname = newSurname;
    }
}

const newUser = new User("Yurii", 20);
console.log(newUser.surname);
newUser.surname = 123;
console.log(newUser.surname);
