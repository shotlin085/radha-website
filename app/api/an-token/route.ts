import { createTokenHandler } from "@21st-sdk/nextjs/server";
import { getServerEnv } from "@/lib/env";

export async function POST(request: Request) {
  const handler = createTokenHandler({
    apiKey: getServerEnv().API_KEY_21ST,
  });

  return handler(request);
}
