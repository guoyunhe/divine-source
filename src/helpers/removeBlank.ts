export function removeBlank(source: string) {
  return source.replace(/^\s*\n/gm, '').trim();
}
