let primaryKey = 0
const db = new Map()
class User {

    constructor(values) {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        }
        this.id = String(++primaryKey)
        this.createdAt = new Date()
    }

    update(values) {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                this[key] = values[key]
            }
        }
        return Promise.resolve(this)
    }
}

User.create = function (values) {
    const newUser = new User(values)
    db.set(newUser.id.toString(), newUser)
    return Promise.resolve(newUser)
}

User.findById = function (userId) {
    return Promise.resolve(db.get(userId))
}

User.findAll = function () {
    return Promise.resolve([...db.values()])
}

User.remove = function (userId) {
    return Promise.resolve(db.delete(userId))
}

module.exports = User