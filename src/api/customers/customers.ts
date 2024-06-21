import {ICustomer} from "./models/customer.ts";
import {FortnoxBase} from "../common/fortnox-base.ts";
import { ICustomerListItem } from "./models/customer-list-item.ts";

/**
 * @module
 * Represents the Customers class which provides functions to handle Customers in Fortnox.
 *
 * @example
 * ```ts
 * import { Client } from "@oh77/fortnox-api";
 *
 * const client = new Client(...);
 * const customers = await client.Customers.Get();
 *
 * ```
 */
export class Customers extends FortnoxBase {

    /**
     * Creates an instance of the Customers class.
     * @param {string} secret - The secret key from Fortnox.
     * @param {string} token - The access token from Fortnox.
     */
    constructor(secret: string, token: string) {
        super(secret, token);
    }

    /**
     * Retrieves a list of customers.
     * @returns {Promise<ICustomerListItem[]>} - A promise that resolves to an array of customer list items.
     */
    async Get(): Promise<ICustomerListItem[]> {
        const response = await this.request("GET", "/customers");
        return response.Customers;
    }

    /**
     * Retrieves a customer by ID.
     * @param {string} id - The ID of the customer.
     * @returns {Promise<ICustomer>} - A promise that resolves to a customer.
     */
    async GetById(id: string): Promise<ICustomer> {
        const response = await this.request("GET", `/customers/${id}`);
        return response.Customer;
    }

    /**
     * Creates a new customer.
     * @param {ICustomer} customer - The customer to create.
     * @returns {Promise<ICustomer>} - A promise that resolves to the created customer.
     */
    async Create(customer: ICustomer): Promise<ICustomer> {
        return (await this.request("POST", "/customers", {Customer: customer})).Customer;
    }

    /**
     * Updates a customer.
     * @param {string} id - The ID of the customer to update.
     * @param {ICustomer} customer - The updated customer.
     * @returns {Promise<ICustomer>} - A promise that resolves to the updated customer.
     */
    async Update(id: string, customer: ICustomer): Promise<ICustomer> {
        return (await this.request("PUT", `/customers/${id}`, {Customer: customer})).Customer;
    }

    /**
     * Deletes a customer.
     * @param {string} id - The ID of the customer to delete.
     * @returns {Promise<void>} - A promise that resolves when the customer is deleted.
     */
    async Delete(id: string): Promise<void> {
        await this.request("DELETE", `/customers/${id}`);
    }
}
