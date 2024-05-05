import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/backend";

export async function POST(req: Request): Promise<Response> {
  const copilotKit = new CopilotRuntime({});

  return copilotKit.response(req, new OpenAIAdapter({ model: 'gpt-3.5-turbo' }));
}
