type Env = {
  API_URI: string;
  LOG_LEVEL: 'debug' | 'info' | 'warm' | 'error';
}

export const env: Env = {
  API_URI = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
}
