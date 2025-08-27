import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = await fetch("https://picsum.photos/v2/list?limit=21");
  const data = await response.json();

  const res = NextResponse.json(data);

  // Imposta gli header CORS per permettere tutte le origini (modifica se serve)
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return res;
}

// Rispondi alle OPTIONS (preflight) per CORS
export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
