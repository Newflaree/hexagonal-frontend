import { Email } from '../value-objects/Email';

export interface UserProps {
  id: string;
  email: Email;
  name: string;
  token: string;
}

export class User {
  readonly id: string;
  readonly email: Email;
  readonly name: string;
  readonly token: string;

  constructor( props: UserProps ) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.token = props.token;
  }
}
