import 'server-only';

import { Client } from '@notionhq/client';

const cache = new Map<string, Client>();

export const createApi = (auth: string): Client => {
  if (cache.has(auth)) {
    return cache.get(auth);
  }
  const api = new Client({ auth });
  cache.set(auth, api);
  return api;
};
