// /////////////////////////////1
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// const update1: Partial<Product> = {name: "Olcha"}

// const update2: Partial<Product> = {price: 12}

// const ReadonlyUser: Readonly<Product> = {id:1, name: "Olcha", price: 12, description: "sdfsdf"}
// ReadonlyUser.id = 2

// /////////////////////////////////////2
// namespace Utils {
//   export function add(a: number,  b: number): number {
//     return a + b
//   }
//   export function subtract(a: number,  b: number): number {
//     return a - b
//   }
//   export function multiply(a: number,  b: number): number {
//     return a * b
//   }
// }

// ///////////////////////////////////////3



// ////////////////////////////////////////4
// function filterByProperty<T, K extends keyof T>(
//   items: T[],
//   key: K,
//   value: T[K]
// ): T[] {
//   return items.filter(item => item[key] === value);
// }

// /////////////////////////////////////////5
// function ValidateString(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     for (const arg of args) {
//       if (typeof arg !== "string" || arg.trim() === "") {
//         throw new Error(`${propertyKey}: invalid string`);
//       }
//     }
//     return original.apply(this, args);
//   };

//   return descriptor;
// }


// class User {
//   id: number;
//   name: string;
//   email: string;

//   constructor(id: number, name: string, email: string) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//   }

//   update(data: Partial<User>) {
//     Object.assign(this, data);
//   }

//   @ValidateString
//   changeName(name: string) {
//     this.name = name;
//   }
// }

// const user = new User(1, "Ali", "ali@mail.com");

// user.update({name: "Vali"});

// user.changeName("Hasan");

// user.changeName(""); 


// //////////////////////////////////////////////6
// function myFunc(value:unknown): unknown {
//   if (typeof value === "number") {
//     return value * 2
//   }
// }


// //////////////////////////////////////////7

// type ExcludeKeys<T, K extends keyof T> = Omit<T, K>;

// interface User {
//   id:number;
//   name:string;
//   email:string;
//   password:string;
// }

// type SafeUser = ExcludeKeys<User, "password">;

// ///////////////////////////////////////8
// function LogAsync(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.value;

//   descriptor.value = async function (...args: any[]) {
//     console.log(`[${propertyKey}] called with:`, args);

//     try {
//       const result = await original.apply(this, args);

//       console.log(`[${propertyKey}] result:`, result);
//       return result;
//     } catch (error) {
//       console.log(`[${propertyKey}] error:`, error);
//       throw error;
//     }
//   };

//   return descriptor;
// }


// class UserService {
//   @LogAsync
//   async getUser(id: number): Promise<string> {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(`User ${id}`), 1000);
//     });
//   }
// }

//////////////////////////////////////////////3-topshriq

//1


//2
// type OmitKey<T, K extends keyof T> = Omit<T, K>;

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   age: number;
// }

// type SafeUser = OmitKey<User, "password">;

//3
// function unknownFunc(a:unknown): unknown {
//   if (typeof a === "string") {
//     return a.toLocaleUpperCase()
//   }else if(typeof a === "number") {
//     return a + 2
//   }else if(Array.isArray(a)) {
//     return a.map(a => a + 2)
//   }
// }

// //4
// interface User {
//   id:number;
//   name:string;
//   email:string;
// }

// const a:Pick<User, "id" | "name"> = {id: 1, name: "Jalol",}


//
// function Readonly(
//   target: any,
//   propertyKey: string
// ) {
//   Object.defineProperty(target, propertyKey, {
//     writable: false,
//     configurable: false,
//   });
// }

// class Person {
//   @Readonly
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p = new Person("Jaloliddin");
// console.log("Birinchi:", p.name);

// p.name = "Ali"; 
// console.log("Keyingi:", p.name);

//
// namespace Utils {
//   export function greet(name: string): string {
//     return `Salom, ${name}!`;
//   }
// }

// const message = Utils.greet("Jaloliddin");
// console.log(message); 

//
// function divide(a:number, b:number): number {
//   if (b / 0 || a / 0) {
//     throw new Error("No'lga bolish mumkin emas")
//   }
//   return a / b
// }