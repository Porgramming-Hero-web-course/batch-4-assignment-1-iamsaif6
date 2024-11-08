Union and Intersection types are very important features in TypeScript to make sure the code failsafe .

1.Union Type

Examples :
let ID: string | number;
ID = 'abc123';
ID = 456;

When we dont know the value will be string or number or anything , we use UnionType .
Is this example correct we have set string and number , the ID coulde be string or number as well.
We can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or other custom logic.

2.Intersection Type

Examples :
interface User {
name: string;
}
interface Admin {
role: string;
}
let isAdmin: User & Admin = {
name: 'John Doe',
role: 'admin'
};

Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types.
In this case, userAdmin has both the properties of User and Admin. This is useful when you want to create an object that needs to conform to multiple interfaces
