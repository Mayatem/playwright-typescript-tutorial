import base from "@playwright/test";
import path from "path";
import fs from "fs";

export interface BookingDates { checkin: string; checkout: string; }
export interface CreateBookingRequest {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds?: string;
}

type Fixtures = {
  buildBookingPayload: (overrides?: Partial<CreateBookingRequest>) => CreateBookingRequest;
};

export const test = base.extend<Fixtures>({
  buildBookingPayload: async ({}, use) => {
    // Load once per worker
    const filePath = path.join(__dirname, "../test-data/api_request/Dynamic_POST_API_Request.json");
    const template = fs.readFileSync(filePath, "utf-8");

    const defaults: CreateBookingRequest = {
      firstname: "John",
      lastname: "Doe",
      totalprice: 123,
      depositpaid: true,
      bookingdates: { checkin: "2025-08-15", checkout: "2025-08-30" },
      additionalneeds: "Breakfast"
    };

    function fillTemplate<T>(tpl: string, data: Record<string, unknown>): T {
      const out = tpl.replace(/{{\s*([\w.]+)\s*}}/g, (_m, key) =>
        data[key] === undefined || data[key] === null ? "" : String(data[key])
      );
      return JSON.parse(out) as T;
    }

    await use((overrides = {}) => {
      const merged: CreateBookingRequest = {
        ...defaults,
        ...overrides,
        bookingdates: { ...defaults.bookingdates, ...overrides.bookingdates }
      };
      return fillTemplate<CreateBookingRequest>(template, {
        firstname: merged.firstname,
        lastname: merged.lastname,
        totalprice: merged.totalprice,
        checkin: merged.bookingdates.checkin,
        checkout: merged.bookingdates.checkout,
        additionalneeds: merged.additionalneeds ?? ""
      });
    });
  }
});

export const expect = test.expect;
