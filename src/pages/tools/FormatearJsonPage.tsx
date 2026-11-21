import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy, Check } from "lucide-react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { formatJson } from "@/lib/tools/formatJson";
import { trackToolUsage } from "@/lib/hitCounter";

const FormatearJsonPage = () => {
  const { t } = useTranslation("tools");

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const run = (mode: "pretty" | "minify") => {
    const result = formatJson(input, mode);
    if (result.ok) {
      setOutput(result.output!);
      setError(null);
      trackToolUsage("formatear-json");
    } else {
      setOutput(null);
      setError(result.errorMessage || t("ui.json_invalid"));
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPageLayout toolId="formatear-json">
      <div className="border border-neutral-800 rounded-xl p-6 md:p-8 space-y-4">
        <div>
          <p className="text-neutral-400 text-sm mb-2">{t("ui.json_input_label")}</p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("ui.json_placeholder")}
            className="w-full h-56 bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-200 font-mono resize-y focus:outline-none focus:border-neutral-600"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => run("pretty")}
            disabled={!input.trim()}
            className="bg-white text-black hover:bg-white/80 rounded-full px-8"
          >
            {t("ui.json_format_button")}
          </Button>
          <Button
            onClick={() => run("minify")}
            disabled={!input.trim()}
            variant="outline"
            className="rounded-full px-8 border-neutral-700 text-white bg-transparent hover:bg-white/10"
          >
            {t("ui.json_minify_button")}
          </Button>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-neutral-400 text-sm">{t("ui.json_output_label")}</p>
              <button
                onClick={handleCopy}
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? t("ui.copied") : t("ui.copy_button")}
              </button>
            </div>
            <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap max-h-[28rem] overflow-y-auto text-neutral-200">
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};

export default FormatearJsonPage;
