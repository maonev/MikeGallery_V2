type ProjectDescriptionProps = {
  desc: string;
};

const HIGHLIGHT_REGEX =
  /((?:[$€£¥]|Rp\s?)?\d+(?:[.,]\d+)?(?:\s?(?:%|x|\+|K|B|ms|s|users|jt|rb))?)/gi;

function formatTextWithHighlight(text: string) {
  const parts = text.split(HIGHLIGHT_REGEX);

  return parts.map((part, idx) => {
    if (part && HIGHLIGHT_REGEX.test(part)) {
      HIGHLIGHT_REGEX.lastIndex = 0;

      return (
        <span key={idx} className="font-medium text-amber-400">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function ProjectDescription({ desc }: ProjectDescriptionProps) {
  const paragraphs = desc
    .split(/\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-white md:pr-20 lg:text-lg">
          {formatTextWithHighlight(paragraph)}
        </p>
      ))}
    </div>
  );
}
