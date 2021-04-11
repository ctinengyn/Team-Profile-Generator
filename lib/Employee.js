// `Employee` parent class with the following properties and methods: //

// * name
// * id
// * getName()
// * gitId()
// * getEmail()
// * getRole()

// Returns "Employee"

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getName() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;