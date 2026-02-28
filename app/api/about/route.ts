export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      response: "fixed-response",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
