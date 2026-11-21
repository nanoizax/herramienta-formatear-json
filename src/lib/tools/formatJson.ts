export interface JsonFormatResult {
  ok: boolean;
  output?: string;
  errorMessage?: string;
}

export function formatJson(input: string, mode: "pretty" | "minify"): JsonFormatResult {
  try {
    const parsed = JSON.parse(input);
    return { ok: true, output: mode === "pretty" ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed) };
  } catch (e) {
    return { ok: false, errorMessage: e instanceof Error ? e.message : "JSON invalido" };
  }
}
