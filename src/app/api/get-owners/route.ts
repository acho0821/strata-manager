export const config = { runtime: 'edge' };

export async function POST(request: Request): Promise<Response> {
  const formData = await request.text();
  console.log("Issue submitted:", formData);

  return Response.redirect("https://sunset-apartments.vercel.app/thank-you", 302);
}

export async function GET(): Promise<Response> {
  return new Response("Method not allowed", { status: 405 });
}
