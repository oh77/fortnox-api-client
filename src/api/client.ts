import { Customers } from "./customers/customers.ts";

export class Client {
    public readonly Customers: Customers;

    constructor(secret: string, token: string) {
        this.Customers = new Customers(secret, token);
    }
}
