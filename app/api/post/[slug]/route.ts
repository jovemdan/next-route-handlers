import { NextResponse } from 'next/server'

export async function GET(req: Request,
  { params }: { params: { slug: string } }) {
  const slug = params.slug

  return NextResponse.json({ slug })
}
