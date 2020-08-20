class User {
  constructor(id, name, lastName, email, password, dni, isAdmin = false) {
    this._id = id;
    this._name = name;
    this._dni = dni;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get dni() {
    return this._dni;
  }
  get isAdmin() {
    return this._isAdmin;
  }

  set id(id) {
    this._id = id;
  }
  set name(name) {
    this._name = name;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set email(email) {
    this._email = email;
  }
  set password(password) {
    this._password = password;
  }
  set isAdmin(isAdmin) {
    this._isAdmin = isAdmin;
  }
  set dni(dni) {
    this._dni = dni;
  }
}

module.exports = User;
