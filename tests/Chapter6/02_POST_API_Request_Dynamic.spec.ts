// Import playwright module
import { test, expect } from '@playwright/test';
import {formatAPIRequest} from '../../src/utils/APIHelper';

// to read the json file
import path from 'path';
import fs from 'fs';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API Request using dynamic file in playwright & typescript', async ({ request }) => {
//1 - READING JSON DATA
    //to reach the json dynamic request body
const filePath = path.join(__dirname, '../../test-data/api_request/Dynamic_POST_API_Request.json');
const jsonTemplate = fs.readFileSync(filePath, 'utf-8'); //read teplate from dynamic json

    //create an array contains data, firstname, lastname  values: any[] from APIHelper.ts
const values = ['Simik', 'Star', 100, 'swimmingpool'];

// 2 - UPDATING POST API REQUEST BODY
    //calling function from APIHelper.ts except 2 parameters
                                       //1-> json template  //2- >values: any[]   
const postAPIRequest = await formatAPIRequest(jsonTemplate, values); //json type of data

// as formatAPIRequest function promese String type of data I parse json to string JSON.parse(postAPIRequest)

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Simik');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Star');

     // Validate API nested response body
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-08-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-08-30');
});