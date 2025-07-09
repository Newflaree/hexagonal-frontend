// Logger
import { logger } from '../logger/logger';


export async function fetchJson<T>(
  url: string,
  init: RequestInit = {}
): Promise<T> {
  logger.debug( `HTTP ${ init.method ?? 'GET' } - ${ url }` );

  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...init.headers },
    ...init,
  });

  if ( !res.ok ) {
    logger.warn( `HTTP ${ res.status } ${ res.statusText } - ${ url }` );
    throw new Error( `${ res.status } ${ res.statusText }` );
  }

  const data = ( await res.json() ) as T;
  logger.debug( `HTTP ${ res.status } ✓ ${ url }`, data );

  return data;
}
