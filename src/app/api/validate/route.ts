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
    if (parsed.errors.length > 0) {
      return NextResponse.json({ valid: false, errors: parsed.errors, warnings: parsed.warnings });
    }
    const graph = buildResourceGraph(parsed);
    return NextResponse.json({
      valid: !graph.hasCycles,
      errors: graph.hasCycles ? [{ message: `Circular dependencies detected: ${graph.cycles.map(c => c.join(' → ')).join('; ')}`, severity: 'error' }] : [],
      warnings: parsed.warnings,
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
