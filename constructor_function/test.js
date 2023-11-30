function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  const newUser = new User('Alice', 25);
  newUser.greet(); // ผลลัพธ์: Hello, my name is Alice and I'm 25 years old.
  