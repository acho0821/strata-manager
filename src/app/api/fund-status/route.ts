export const config = { runtime: 'edge' };

export async function GET(): Promise<Response> {
  const funds = {
    administrationFund: "$12,500",
    capitalWorksFund: "$8,200"
  };
  return new Response(JSON.stringify(funds), {
    headers: { "Content-Type": "application/json" }
  });
}
