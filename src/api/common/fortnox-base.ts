export class FortnoxBase {
    private readonly baseUrl: string = "https://api.fortnox.se/3";
    private readonly secret: string;
    private readonly token: string;

    constructor(secret: string, token: string) {
        this.secret = secret;
        this.token = token;
    }

    async request(
        method: string,
        endpoint: string,
        body?: any) {

        const url = `${this.baseUrl}${endpoint}`;
        const headers = new Headers({
            'Accept': 'application/json',
            "Access-Token": this.token,
            "Content-Type": "application/json",
            "Client-Secret": this.secret
        });

        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        if (response.status === 204) {
            return;
        }

        return await response.json();
    }

}

