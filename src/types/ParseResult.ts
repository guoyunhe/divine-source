export interface ParseResult {
  /**
   * Count of total lines.
   *
   * Should be the summary of rest counts together.
   */
  total: number;

  /**
   * Count of code lines.
   *
   * Exclude blank, comment, import, type lines.
   */
  codes: number;

  /**
   * Count of import lines.
   */
  imports: number;

  /**
   * Count of type definition lines.
   *
   * TypeScript only.
   */
  types: number;

  /**
   * Count of comment lines.
   */
  comments: number;

  /**
   * Count of blank lines.
   */
  blanks: number;
}
