import { NextResponse } from 'next/server';

const siteUrl = 'https://ai.ibboabdoli.com';

export function GET() {
  return NextResponse.redirect(siteUrl, 308);
}
