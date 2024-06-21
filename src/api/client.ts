import { Customers } from "./customers/customers.ts";

/**
 * Represents the Client class which provides access to CRUD operations within the Fortnox API.
 *
 * @example
 * ```ts
 * import { Client } from "@oh77/fortnox-api";
 *
 * const client = new Client("secret", "token");
 *
 * ```
 */
export class Client {
    /**
     * Gives access to Customer endpoints.
     * @type {Customers}
     */
    public readonly Customers: Customers;

    /**
     * Creates an instance of the Client class.
     * @param {string} secret - The secret key from Fortnox.
     * @param {string} token - The access token from Fortnox.
     */
    constructor(secret: string, token: string) {
        this.Customers = new Customers(secret, token);
    }
}
