export const config = {
  runtime: 'edge',
};

export async function POST(request: Request): Promise<Response> {
  // Safely read form data
  const body = await request.formData();

  // Extract fields (if you want to use them later)
  const name = body.get("name");
  const unit = body.get("unit");
  const issue = body.get("issue");

  console.log("Issue submitted:", { name, unit, issue });

  // ✅ Redirect to homepage (guaranteed to exist)
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/"
    }
  });
}

export async function GET(): Promise<Response> {
  return new Response("GET not allowed", { status: 405 });
}
