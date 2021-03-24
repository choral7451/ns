"use strict";

class UserStorage {
  static #users = {
        id: ["nck", "nckmaster"],
        psword: ["664258", "a740857"],
        name : ["임성준", "임성준"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers; 
    }
}

module.exports = UserStorage;