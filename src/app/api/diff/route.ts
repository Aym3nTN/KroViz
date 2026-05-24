import { NextRequest, NextResponse } from 'next/server';
import { parseRGD } from '@/engine/parser';
import { diffRGDs } from '@/engine/diff';

export async function POST(req: NextRequest) {
  try {
    const { oldYaml, newYaml } = await req.json();
    if (!oldYaml || !newYaml) {
      return NextResponse.json({ error: 'Missing oldYaml or newYaml fields' }, { status: 400 });
    }
    const oldParsed = parseRGD(oldYaml);
    const newParsed = parseRGD(newYaml);
    const diff = diffRGDs(oldParsed, newParsed);
    return NextResponse.json(diff);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
