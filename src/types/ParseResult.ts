export interface ParseResult {
  /**
   * Count of total lines.
   *
   * Should be the summary of rest counts together.
   */
  totalLines: number;

  /**
   * Count of code lines.
   *
   * Exclude blank, comment, import, type lines.
   */
  codeLines: number;

  /**
   * Count of import lines.
   */
  importLines: number;

  /**
   * Count of type definition lines.
   *
   * TypeScript only.
   */
  typeLines?: number;

  /**
   * Count of comment lines.
   */
  commentLines: number;

  /**
   * Count of blank lines.
   */
  blankLines: number;
}
