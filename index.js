const axios = require('axios');

/**
 * Check the availability of multiple domains.
 * @param {Array} domains - An array of domain objects, each containing a "name" property.
 * @param {string} apiKey - The API key for authenticating with the registry.
 * @returns {Promise} - A promise that resolves with the domain availability results.
 */
const checkDomainAvailability = async (domains, apiKey) => {
  try {
    const response = await axios.get('https://registry.co.ug/api/v2/domains/check-availability', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      data: {
        domains: domains.map(domain => ({ name: domain })),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error checking domain availability:', error);
    throw error;
  }
};

module.exports = checkDomainAvailability;