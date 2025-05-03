export async function GET(request: Request): Promise<Response> {
  request.headers.set("Content-Type", "application/json");

  return new Response(status);
}
