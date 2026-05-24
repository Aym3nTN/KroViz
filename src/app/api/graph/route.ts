import { NextRequest, NextResponse } from 'next/server';
import { parseRGD } from '@/engine/parser';
import { buildResourceGraph } from '@/engine/graph';

export async function POST(req: NextRequest) {
  try {
    const { yaml: yamlString } = await req.json();
    if (!yamlString || typeof yamlString !== 'string') {
      return NextResponse.json({ error: 'Missing yaml field' }, { status: 400 });
    }
    const parsed = parseRGD(yamlString);
    const graph = buildResourceGraph(parsed);
    return NextResponse.json(graph);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
