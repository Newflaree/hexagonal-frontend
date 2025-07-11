export class Email {
  private readonly value: string;

  constructor( raw: string ) {
    if ( !/^[^@]+@[^@]+\.[^@]+$/.test( raw ) ) 
      throw new Error( 'Invalid Email' );

    this.value = raw.toLowerCase();
  }

  toString() {
    return this.value;
  }
}
