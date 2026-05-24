import { NextRequest, NextResponse } from 'next/server';
import { parseRGD } from '@/engine/parser';

export async function POST(req: NextRequest) {
  try {
    const { yaml: yamlString } = await req.json();
    if (!yamlString || typeof yamlString !== 'string') {
      return NextResponse.json({ error: 'Missing yaml field' }, { status: 400 });
    }
    const result = parseRGD(yamlString);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
