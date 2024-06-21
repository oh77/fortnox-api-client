# Fortnox API - Javascript implementation

## Usage
```javascript
import {Client} from "@oh77/fortnox-api";

const CLIENT_SECRET = < secret from Fortnox >;
const ACCESS_TOKEN = < access token from Fortnox >;

const client = new Client(CLIENT_SECRET, ACCESS_TOKEN);

const response = await client.Customers.Get();

response.map( cust => console.log(`${cust.CustomerNumber} - ${cust.Name}`));
```

## Package
@oh77/fortnox-api [jsr.io]

