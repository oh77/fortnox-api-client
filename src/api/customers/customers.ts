import {ICustomer} from "./models/customer.ts";
import {FortnoxBase} from "../common/fortnox-base.ts";
import { ICustomerListItem } from "./models/customer-list-item.ts";

export class Customers extends FortnoxBase {

    constructor(secret: string, token: string) {
        super(secret, token);
    }

    async Get(): Promise<ICustomerListItem[]> {
        const response = await this.request("GET", "/customers");
        return response.Customers;
    }

    async GetById(id: string): Promise<ICustomer> {
        const response = await this.request("GET", `/customers/${id}`);
        return response.Customer;
    }

    async Create(customer: ICustomer): Promise<ICustomer> {
        return (await this.request("POST", "/customers", {Customer: customer})).Customer;
    }

    async Update(id: string, customer: ICustomer): Promise<ICustomer> {
        return (await this.request("PUT", `/customers/${id}`, {Customer: customer})).Customer;
    }

    async Delete(id: string): Promise<void> {
        await this.request("DELETE", `/customers/${id}`);
    }
}
