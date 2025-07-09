type Env = {
  API_URI: string;
  LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

export const env: Env = {
  API_URI: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000',
  LOG_LEVEL: (process.env.NEXT_PUBLIC_LOG_LEVEL as Env['LOG_LEVEL']) ?? 'info'
}
