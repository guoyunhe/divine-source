// https://github.com/antonkc/MOR/blob/main/matchJsImports.md
const re =
  /(?<=(?:[\s\n;])|^)(?:import[\s\n]*((?:(?<=[\s\n])type)?)(?=[\n\s*{])[\s\n]*)((?:(?:[_$\w][_$\w0-9]*)(?:[\s\n]+(?:as[\s\n]+(?:[_$\w][_$\w0-9]*)))?(?=(?:[\n\s]*,[\n\s]*[{*])|(?:[\n\s]+from)))?)[\s\n,]*((?:\*[\n\s]*(?:as[\s\n]+(?:[_$\w][_$\w0-9]*))(?=[\n\s]+from))?)[\s\n,]*((?:\{[n\s]*(?:(?:[_$\w][_$\w0-9]*)(?:[\s\n]+(?:as[\s\n]+(?:[_$\w][_$\w0-9]*)))?[\s\n]*,?[\s\n]*)*\}(?=[\n\s]*from))?)(?:[\s\n]*((?:from)?))[\s\n]*(?:["']([^"']*)(["']))[\s\n]*?;?/gm;

export function removeImportTypeScript(source: string) {
  return source.replace(re, '');
}
