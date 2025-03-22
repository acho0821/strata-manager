export const config = { runtime: 'edge' };

export async function GET(): Promise<Response> {
  const owners = [
    { name: "Alice Tan", unit: "1A" },
    { name: "Bilal Khan", unit: "2B" },
    { name: "Sarah Liu", unit: "3C" }
  ];
  return new Response(JSON.stringify(owners), {
    headers: { "Content-Type": "application/json" }
  });
}
