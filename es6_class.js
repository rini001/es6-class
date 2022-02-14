class family {
 
    // Constructor
    constructor(name, age){
        this.n = name;
        this.a = age;
    }
 
    // Function
   addSurname(){
        this.n =this.n+" "+"Debnath"
    }
}
const f1 = new family("Rini" , 24)
     
f1.addSurname();
     
console.log(f1.n);
