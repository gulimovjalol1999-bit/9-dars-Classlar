// class BankAccount {
//   private balance: number

//   constructor(initialBalance: number) {
//     this.balance = initialBalance
//   }
//   deposit(amount: number): void {
//     this.balance += amount
//   }

//   getBalance(): number {
//     return this.balance
//   }
// }

// const account = new BankAccount(1000)
// account.deposit(500)
// console.log(account.getBalance());

////////////////////////////////////////////////////3
// class Animal {
//   protected sound: string

//   constructor(sound: string) {
//     this.sound = sound
//   }

//   protected makeSound(): void {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   bark(): void {
//     this.makeSound();
//   }
// }

// const dog = new Dog("Woof")
// dog.bark()

///////////////////////////////////////1
// class Car {
//   model: string
//   year: number
//   color: string

//   constructor(model: string, year: number) {
//     this.model = model
//     this.year = year
//     this.color = "White" //default
//   }

//   changeColor(newColor:string) {
//     this.color = newColor
//   }

//   displayInfo():void {
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Color: ${this.color}`);
//   }
// }

// const car = new Car("Jentra", 2023)

// car.changeColor("Black")
// car.displayInfo()


// class Student {
//   firstName:string
//   lastName:string
//   private grade:number

//   constructor(firstName:string, lastName:string, grade:number) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.grade = grade
//   }

//   getFullName():string {
//     return `${this.firstName} ${this.lastName}`
//   }

//   getGrade() {
//     return this.grade
//   }

//   changeGrade(newGrade:number): void {
//     if (newGrade < 1 || newGrade > 11) {
//       throw new Error("Noto‘g‘ri sinf");
//     }
//     this.grade = newGrade
//   }
// }

// const student1 = new Student("ali", "valiyev", 5)

// console.log(student1.getFullName());

// student1.changeGrade(7)
// console.log(student1.getGrade());

/////////////////////////////////////2
// class BankAccount {
//   private balance: number

//   constructor(initialBalance: number) {
//     this.balance = initialBalance
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//     throw new Error("Miqdor musbat bo‘lishi kerak");
//   }
//     this.balance += amount
//   }

//   withdraw(amount: number): void {
//   if (amount <= 0) {
//     throw new Error("Miqdor musbat bo‘lishi kerak");
//   }

//   if (this.balance < amount) {
//     throw new Error("Balansda mablag‘ yetarli emas");
//   }

//   this.balance -= amount;
// }

//   getBalance(): number {
//     return this.balance
//   }
// }

// const account = new BankAccount(1000)
// account.deposit(500)
// account.withdraw(500)
// console.log(account.getBalance());

// class UserAccount {
//   public username:string
//   private password:string

//   constructor(username:string, password:string) {
//     this.username = username
//     this.password = password
//   }

//   changePassword(oldPass:string, newPass:string): void {
//     if (oldPass !== this.password) {
//       throw new Error("Eski parol noto'g'ri")
//     }

//     if (newPass.length < 6) {
//       throw new Error("parol zaif")
//     }

//     this.password = newPass
//   }

//   protected isActive(): boolean {
//     return true
//   }
// }

// const user = new UserAccount("jaloliddin", "123456");

// user.changePassword("123456", "newpass123");

// console.log(user.username);

// interface Animal {
//   name:string
//   age:number

//   speak(): void
// }

// class Dog implements Animal {
//   name:string
//   age:number

//   constructor(name:string, age:number) {
//     this.name = name
//     this.age = age
//   }

//   speak(): void {
//     console.log(`${this.name} says: WOOF!`);
//   }
// }

// class Cat implements Animal {
//   name:string
//   age:number

//   constructor(name:string, age:number) {
//     this.name = name
//     this.age = age
//   }

//   speak(): void {
//     console.log(`${this.name} says: MEOW!`);
//   }
// }

// const dog = new Dog("Rex", 2)
// const cat = new Cat("Mimi", 3)

// dog.speak()
// cat.speak()

// interface RentalItem {
//   id: number;
//   name: string;
//   pricePerDay: number;

//   rentItem(): void;
//   returnItem(): void;
// }

// class CarRental implements RentalItem {
//   id: number;
//   name: string;
//   pricePerDay: number;
//   private isRented:boolean

//   constructor(id: number, name: string, pricePerDay: number) {
//     this.id = id
//     this.name = name
//     this.pricePerDay = pricePerDay
//     this.isRented = false
//   }

//   rentItem(): void {
//     if (this.isRented) {
//       console.log(`${this.name} allaqachon ijaraga berilgan`);      
//     }
//     this.isRented = true;
//     console.log(`${this.name} ijaraga olindi`);
//   }

//   returnItem(): void {
//     if (!this.isRented) {
//       console.log(`${this.name} hali ijaraga olinmagan`);
//     }
//     this.isRented = false
//     console.log(`${this.name} qaytarildi`);    
//   }
// }

// class HouseRental implements RentalItem {
//   id: number;
//   name: string;
//   pricePerDay: number;
//   private isRented: boolean;

//   constructor(id: number, name: string, pricePerDay: number) {
//     this.id = id;
//     this.name = name;
//     this.pricePerDay = pricePerDay;
//     this.isRented = false;
//   }

//   rentItem(): void {
//     if (this.isRented) {
//       console.log(`${this.name} allaqachon ijaraga berilgan`);
//       return;
//     }
//     this.isRented = true;
//     console.log(`${this.name} ijaraga olindi`);
//   }

//   returnItem(): void {
//     if (!this.isRented) {
//       console.log(`${this.name} hali ijaraga olinmagan`);
//       return;
//     }
//     this.isRented = false;
//     console.log(`${this.name} qaytarildi`);
//   }
// }

// const car = new CarRental(1, "BMW X5", 100);
// const house = new HouseRental(1, "Beach House", 200);

// car.rentItem();    
// car.rentItem();    
// car.returnItem();  

// house.rentItem();  
// house.returnItem();

/////////////////////////////////////////////////////4
// abstract class Calculator {
//   abstract add(a: number, b: number): number;
//   abstract subtract(a: number, b: number): number;
//   abstract multiply(a: number, b: number): number;
// }

// class SimpleCalculator extends Calculator {
//   add(a: number, b: number): number {
//     return a + b
//   }

//   subtract(a: number, b: number): number {
//   return a - b
//   }

//   multiply(a: number, b: number): number {
//     return a * b
//   }
// }

// const calc = new SimpleCalculator();

// console.log(calc.add(5, 3));       
// console.log(calc.subtract(10, 4)); 
// console.log(calc.multiply(2, 7));  


// abstract class Shape {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   abstract getArea(): number;
//   abstract getPerimeter(): number;
// }

// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super("Circle");
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   getPerimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super("Rectangle");
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }

//   getPerimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }

// const circle = new Circle(5);
// console.log(circle.name);           
// console.log(circle.getArea());      
// console.log(circle.getPerimeter()); 

// const rectangle = new Rectangle(4, 6);
// console.log(rectangle.name);        
// console.log(rectangle.getArea());   
// console.log(rectangle.getPerimeter()); 


////////////////////////////////////////////////////5
// class Counter {
//   static count: number = 0;

//   constructor() {
//     Counter.count++;
//   }
// }

// const c1 = new Counter();
// const c2 = new Counter();
// const c3 = new Counter();

// console.log(Counter.count); 


// class Logger {
//   private static instance: Logger;
//   private logs: string[] = [];

//   private constructor() {}

//   static getInstance(): Logger {
//     if (!Logger.instance) {
//       Logger.instance = new Logger();
//     }
//     return Logger.instance;
//   }

//   log(message: string): void {
//     this.logs.push(message);
//   }

//   getLogs(): string[] {
//     return this.logs;
//   }
// }

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log("Birinchi log");
// logger2.log("Ikkinchi log");

// console.log(logger1 === logger2); 

// console.log(logger1.getLogs());


/////////////////////////////////////////////////ikkinchi topshiriq
// class Account {
//   private balance: number;
//   public accountNumber: string;
//   public holderName: string;

//   constructor(accountNumber: string, holderName: string, initialBalance: number = 0) {
//     if (initialBalance < 0) {
//       throw new Error("Boshlang‘ich balans manfiy bo‘lishi mumkin emas");
//     }

//     this.accountNumber = accountNumber;
//     this.holderName = holderName;
//     this.balance = initialBalance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Miqdor musbat bo‘lishi kerak");
//     }

//     this.balance += amount;
//   }

//   withdraw(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Miqdor musbat bo‘lishi kerak");
//     }

//     if (this.balance < amount) {
//       throw new Error("Balansda mablag‘ yetarli emas");
//     }

//     this.balance -= amount;
//   }

//   checkBalance(): number {
//     return this.balance;
//   }
// }

// const acc = new Account("1", "Qodir Tolipov", 1000);

// acc.deposit(500);
// console.log(acc.checkBalance());

// acc.withdraw(300);
// console.log(acc.checkBalance()); 

//2
// class Account {
//   protected balance:number
//   public accountNumber:string
//   public holderName:string

//   constructor(accountNumber:string, holderName:string, balance:number = 0) {
//     this.accountNumber = accountNumber
//     this.holderName = holderName
//     this.balance = balance
//   }

//   protected deposit(amount:number): void {
//     if (amount <= 0) throw new Error("Miqdor noto'g'ri")
//       this.balance += amount
//   }

//   protected withDraw(amount:number): void {
//     if(amount <= 0) throw new Error("Miqdor noto'g'ri")
//     if(this.balance < amount) throw new Error("Balansda yetarli mablag mavjud emas")
//       this.balance -= amount
//   }

//   protected checkBalance(): number {
//     return this.balance
//   }
// }

// class CustomerAccount extends Account {
//   constructor(accountNumber:string, holderName:string, balance:number = 0) {
//     super(accountNumber, holderName, balance) 
//   }

//   depositMoney(amount:number): void {
//     this.deposit(amount)
//   }

//   withDrawMoney(amount:number): void {
//     this.withDraw(amount)
//   }

//   viewBalance(): number {
//     return this.checkBalance()
//   }
// }

// class AdminAccount extends Account {
//   private users: Account[] = []

//   constructor(accountNumber:string, holderName:string) {
//     super(accountNumber, holderName, 0)
//   }
  
//   addUser(account: Account): void {
//     this.users.push(account)
//   }

//   closeAccount(accountNumber:string): void {
//     this.users = this.users.filter(acc => acc.accountNumber !== accountNumber)
//   }

//   getAllUsers(): Account[] {
//     return this.users
//   }
// }

// const admin = new AdminAccount("000", "Admin");

// const user1 = new CustomerAccount("123", "Ali", 1000);
// const user2 = new CustomerAccount("124", "Vali", 1000);

// admin.addUser(user1);
// admin.addUser(user2);

// user1.depositMoney(500);
// console.log(user1.viewBalance()); 

// admin.closeAccount("125");
// console.log(admin.getAllUsers()); 


//3
// interface Product {
//   name:string
//   price:number
//   category:string

//   getBalance():number
// }

// abstract class BaseProduct implements Product {
//   name: string
//   price: number
//   category: string

//   constructor(name:string, price:number, category:string) {
//     this.name = name
//     this.price = price
//     this.category = category
//   }

//   getBalance(): number {
//     return this.price
//   }
// }

// class DiscountedPrice extends BaseProduct {
//   discount:number 

//   constructor(name:string, price:number, category:string, discount:number) {
//     super(name, price, category)
//     this.discount = discount
//   }

//   getPrice(): number {
//     return this.price - (this.price * this.discount) / 100
//   }
// }

// const product = new DiscountedPrice("Iphone", 1000, "elektronika", 10)
// const product2 = new DiscountedPrice("Chiroq", 10, "Uy jihozi", 15)

// console.log(product.getPrice());
// console.log(product2.getPrice());

//4
abstract class Character {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  abstract attack(target: Character): void;
  abstract defend(damage: number): void;

  isAlive(): boolean {
    return this.health > 0;
  }
}

class Warrior extends Character {
  attack(target: Character): void {
    const damage = 20;
    console.log(`${this.name} qilich bilan hujum qildi (${damage})`);
    target.defend(damage);
  }

  defend(damage: number): void {
    const reduced = damage - 5; 
    this.health -= reduced > 0 ? reduced : 0;
    console.log(`${this.name} zararni kamaytirdi. HP: ${this.health}`);
  }
}

class Mage extends Character {
  attack(target: Character): void {
    const damage = 30;
    console.log(`${this.name} sehr bilan hujum qildi (${damage})`);
    target.defend(damage);
  }

  defend(damage: number): void {
    const reduced = damage - 2; 
    this.health -= reduced > 0 ? reduced : 0;
    console.log(`${this.name} kam himoyalandi. HP: ${this.health}`);
  }
}

const warrior = new Warrior("Grom", 100);
const mage = new Mage("Merlin", 80);

while (warrior.isAlive() && mage.isAlive()) {
  warrior.attack(mage);
  if (!mage.isAlive()) break;

  mage.attack(warrior);
}

console.log("Jang tugadi!");