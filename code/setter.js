var user = {
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(str) {
    this.firstName = str.split(' ')[0];
    this.lastName = str.split(' ')[1];
  }
}

user.fullName = 'David Waller';
console.log("User", user);
console.log("Full name:", user.fullName);