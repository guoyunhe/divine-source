export function removeComment(source: string) {
  return source.replace(/^\s*\/\*[\s\S]*?\*\/$|^\s*\/\/.*$/gm, '');
}
