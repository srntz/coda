export async function authenticate() {
  await fetch("http://localhost:4111/auth", {
    credentials: "include",
  });
}
