// Import playwright module
import { test, expect } from "@playwright/test";
import { formatAPIRequest } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";

// to read the json file
import path from "path";
import fs from "fs";

test.use({  baseURL: process.env.BASE_API_URL, });

test("Create POST API Request using dynamic file in playwright & typescript", async ({request }) => {

const filePath = path.join( __dirname, "../../test-data/api_request/Dynamic_POST_API_Request.json" );
const jsonTemplate = fs.readFileSync(filePath, "utf-8");

const firstName = faker.person.firstName();
const lastname = faker.person.lastName();
const numbtotalPrice = faker.number.int({min:100, max:500});


  const values = [firstName, lastname, numbtotalPrice];

  const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

  const postAPIResponse = await request.post(`/booking`, {data: JSON.parse(postAPIRequest) });

  const jsonPOSTAPIResponse = await postAPIResponse.json();
  console.log("POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2));

  expect(postAPIResponse.status()).toBe(200);
  expect(postAPIResponse.statusText()).toBe("OK");
  expect(postAPIResponse.headers()["content-type"]).toContain("application/json");

  expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");

  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");

  expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastname);

  expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe("2025-08-15");
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe("2025-08-30");
});
