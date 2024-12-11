export async function authenticate() {
  /*
    UNCOMMENT THIS TO TEST LOCALLY

    await fetch("http//localhost:4111/auth", {
      credentials: "include",
    });
   */

  await fetch("https://coda-api-blue.vercel.app/auth", {
    credentials: "include",
  });
}
