import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { bxl, incredibleCollectible } from "./utils";

export async function GET(request: NextRequest) {
  const bxlResp = await bxl(request);
  const incredibleCollectibleResp = await incredibleCollectible(request);

  const value = JSON.stringify({
    bxl: bxlResp,
    incredibleCollectible: incredibleCollectibleResp,
  });

  if (bxlResp.status === 200 && incredibleCollectibleResp.status === 200) {
    return new NextResponse(value, { status: 200 });
  }
  return new NextResponse(value, { status: 500 });
}
