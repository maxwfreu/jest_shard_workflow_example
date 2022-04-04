test("A very slow test", async () => {
  await new Promise((r) => setTimeout(r, 3000));
});
