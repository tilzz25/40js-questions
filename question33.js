//33) What is an object in JavaScript? Write an example.

//In JavaScript, an object is a collection of key-value pairs where each key (also called a property)
// is a string (or symbol), and each value can be any data type (string, number, array, function, etc.).
// Objects are used to store and organize data and can represent real-world entities.


const person = {
    name: "tilak",
    age: 18,
    job: "web developer",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  console.log(person.name);  
  console.log(person.age);   
  person.greet();            
  