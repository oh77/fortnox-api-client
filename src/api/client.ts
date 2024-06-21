import { Customers } from "./customers/customers.ts";

export class Client {
    public readonly Customer: Customers;

    constructor(secret: string, token: string) {
        this.Customer = new Customers(secret, token);
    }
}
