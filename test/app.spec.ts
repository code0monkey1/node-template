import supertest from "supertest";
import app from "../src/app";
const api = supertest(app);

describe("testing", () => {
    it("should", async () => {
        const response = await api
            .get("/data")
            .expect(200)
            .expect("Content-Type", /application\/json/);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.data).toEqual("working");

        expect(true).toBeTruthy();
    });
});
