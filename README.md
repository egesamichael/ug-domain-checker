
# Domain Checker

A simple Node.js library to check the availability of `.ug` domains using the registry.co.ug API.

## Features

- Check the availability of multiple domains at once.
- Easily integrate into your Node.js projects.
- Secure API usage with API key authentication.

## Installation

### NPM

To install the library, run the following command:

```bash
npm install ug-domain-checker
```

### Usage

1. **Generate an API Key** from [registry.co.ug](https://registry.co.ug).
2. Use the following code to check domain availability:

```javascript
const checkDomainAvailability = require('domain-checker');

const domains = ['example1.co.ug', 'example2.co.ug', 'example3.co.ug'];
const apiKey = 'your-api-key-here';

checkDomainAvailability(domains, apiKey)
  .then(data => {
    console.log('Domain availability:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Parameters
- `domains`: An array of domain names (e.g., `['example1.co.ug', 'example2.co.ug']`).
- `apiKey`: Your API key generated from [registry.co.ug](https://registry.co.ug).

### Response Example

The response will be an object indicating the availability of each domain:

```json
{
  "status": "success",
  "data": [
    {
      "domain": "example1.co.ug",
      "available": 1
    },
    {
      "domain": "example2.co.ug",
      "available": 0
    }
  ]
}
```

- `available`: `1` means the domain is available, `0` means it's not available.

## License

MIT License. See [LICENSE](LICENSE) for more details.

## Contribution

Feel free to open issues or submit pull requests to improve this library. Contributions are welcome!

## Contact

For any issues or questions, open an issue on the [GitHub Repository](https://github.com/egesamichael/ug-domain-checker) or reach out to me on [X](https://x.com/egesamicheal).
