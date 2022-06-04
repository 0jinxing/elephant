import type { Headers } from 'got';

const ua =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36';

export const headers: Headers = {
  'user-agent': ua,
};
