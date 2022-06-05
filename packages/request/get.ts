import fetch from 'node-fetch';
import env from '@elephant/env';

export async function get(url: string) {
  const resp = await fetch(url, {
    headers: { 'user-agent': env.request.ua },
  });
  return await resp.text();
}

export default get;
