import { test, expect } from "@playwright/test";
import { getPOSTAPIRequestBody } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";


test.use({  baseURL: process.env.BASE_API_URL, });

test("Create Dynamic Typesafeyt-POST API Request playwright & typescript", async ({request }) => {

const firstName = faker.person.firstName();
const lastname = faker.person.lastName();
const totalPrice = faker.number.int({min:100, max:500});


const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastname, totalPrice,
    true, "breakfast", "2025-06-06", "2025-07-06" )


const postAPIResponse = await request.post(`/booking`, {data: postAPIRequest});

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

expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe("2025-06-06");
expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe("2025-07-06");
});
