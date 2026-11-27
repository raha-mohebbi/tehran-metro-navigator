
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://metto.ir/api";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;

    const endpoint = path.map(encodeURIComponent).join("/");
    const searchParams = request.nextUrl.searchParams.toString();

    const url = `${API_BASE_URL}/${endpoint}${
      searchParams ? `?${searchParams}` : ""
    }`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Metro API Proxy Error:", error);

    return NextResponse.json(
      { message: "ارتباط با سرویس مترو برقرار نشد." },
      { status: 502 }
    );
  }
}
