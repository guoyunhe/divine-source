// Bar type
export type Bar = 'foo' | 'bar';

/**
 * Foobar
 *
 * @param bar
 * @returns
 */
export default function Foo(bar: Bar): Bar {
  if (bar === 'foo') {
    return 'bar';
  }

  return 'foo';
}
