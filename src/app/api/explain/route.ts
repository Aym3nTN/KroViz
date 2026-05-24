import { NextRequest, NextResponse } from 'next/server';
import { parseRGD } from '@/engine/parser';
import { buildResourceGraph } from '@/engine/graph';
import { explainChain, explainExecutionPlan } from '@/engine/explain';

export async function POST(req: NextRequest) {
  try {
    const { yaml: yamlString, chain } = await req.json();
    if (!yamlString) {
      return NextResponse.json({ error: 'Missing yaml field' }, { status: 400 });
    }
    const parsed = parseRGD(yamlString);
    const graph = buildResourceGraph(parsed);

    if (chain && Array.isArray(chain)) {
      const explanation = explainChain(chain, graph);
      return NextResponse.json(explanation);
    }

    const explanation = explainExecutionPlan(graph);
    return NextResponse.json(explanation);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
