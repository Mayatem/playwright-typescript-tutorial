// Import playwright module
import { test, expect } from '@playwright/test';

import postAPIRequest from '../../test-data/api_request/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
    // Validate nested propert/key names
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');


    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Novik');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Star');

     // Validate API nested response body
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-08-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-08-30"');
});