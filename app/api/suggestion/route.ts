export async function get(request: Request) {
  //connect to our microsoft azure funciton endpoint
  const response = await fetch("...", {
    cache: "no-store",
  });

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), { status: 200 });
}
