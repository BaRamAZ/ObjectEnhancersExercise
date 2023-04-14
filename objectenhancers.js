Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet() 

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}

//Same Keys and values:

//Write a ES2015 version

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }



  //Computed Property names
  let favoriteNumber = 70;

const instructor = {
  firstName: "Baili",
  [favoriteNumber]: "That is my favorite!"
}


//Object Methods
const instructor = {
    firstName: "Baili",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }