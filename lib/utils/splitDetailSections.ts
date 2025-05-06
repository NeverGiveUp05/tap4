export default function splitDetailSections(detail: string) {
  const sections = detail.split(/### /).filter(Boolean);

  const result = sections.reduce(
    (acc, section) => {
      const [titleLineRaw, ...contentLines] = section.trim().split('\n');
      const titleLine = titleLineRaw.trim();
      const content = contentLines.join('\n').trim();
      const title = titleLine.toLowerCase();

      if (!titleLine || !content || content === '#') return acc;

      if (title.startsWith('what is')) {
        return {
          ...acc,
          introduction: `${titleLine}\n${content}`,
        };
      }

      const faqStarters = ['how', 'can', 'will', 'when', 'why', 'does', 'do', 'is', 'are', 'should'];
      const isFAQ = faqStarters.some((word) => title.startsWith(word));

      if (isFAQ) {
        return {
          ...acc,
          faq: [...acc.faq, `### ${titleLine}\n${content}`],
        };
      }

      // Default: anything not intro or FAQ is a feature
      return {
        ...acc,
        feature: [...acc.feature, `### ${titleLine}\n${content}`],
      };
    },
    {
      introduction: '',
      feature: [] as string[],
      faq: [] as string[],
    },
  );

  return {
    ...result,
    feature: result.feature.join('\n\n'),
    faq: result.faq.join('\n\n'),
  };
}
