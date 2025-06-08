export async function POST(request) {
  const body = await request.json();

  return new Response(
    JSON.stringify({ message: 'Hello from serverless function!', received: body }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
