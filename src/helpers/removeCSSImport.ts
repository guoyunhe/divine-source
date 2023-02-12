const re = /^\s*@import\s+url\(\s*['"].+['"]\s*\)\s*;?\s*$/g;

export function removeCSSImport(source: string) {
  return source.replace(re, '');
}
