// Envs Config
import { env } from '../env/env';


type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  #levelPriority: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  private shouldLog( level: LogLevel ) {
    return (
      this.#levelPriority[level] >= this.#levelPriority[ env.LOG_LEVEL as LogLevel ] 
    );
  }

  debug( message: string, meta?: unknown ) {
    if ( this.shouldLog( 'debug' ) ) console.debug( '[DEBUG]', message, meta );
  }

  info( message: string, meta?: unknown ) {
    if ( this.shouldLog( 'info' ) ) console.info( '[INFO]', message, meta );
  }

  warn( message: string, meta?: unknown ) {
    if ( this.shouldLog( 'warn' ) ) console.warn( '[WARN]', message, meta );
  }

  error( message: string, meta?: unknown ) {
    if ( this.shouldLog( 'error' ) ) console.error( '[ERROR]', message, meta );
  }
}

export const logger = new Logger();
