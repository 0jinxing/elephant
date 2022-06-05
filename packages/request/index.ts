import get from './get';
import headless from './headless';

export async function request(url: string, browser?: boolean) {
  if (browser) {
    return await headless(url);
  }
  return await get(url);
}

export default request;
