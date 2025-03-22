export const config = { runtime: 'edge' };

export async function POST(request: Request): Promise<Response> {
  const formData = await request.text();
  console.log("Form submitted:", formData);

  return Response.redirect("https://sunset-apartments.vercel.app/thank-you", 302);
}

export async function GET(): Promise<Response> {
  return new Response("GET method not allowed", { status: 405 });
}
