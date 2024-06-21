import { Customer } from "./customer/customer-api.ts";

export class Client {
    public readonly Customer: Customer;

    constructor(secret: string, token: string) {
        this.Customer = new Customer(secret, token);
    }
}


