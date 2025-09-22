const request = require("supertest");
const { app } = require("../app");

describe("simple-node-app", () => {
  it("GET /hello should return ok: true", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });

  it("GET / should greet", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello from server/);
  });
});
