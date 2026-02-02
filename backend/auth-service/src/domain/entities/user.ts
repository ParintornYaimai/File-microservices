// src/domain/entities/User.ts
export type UserProps = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  passwordHash: string;
  profilePicture: string;
};

export class User {
  constructor(public readonly props: UserProps) {}

  get id() { return this.props.id; }
  get firstname() { return this.props.firstname; }
  get lastname() { return this.props.lastname; }
  get email() { return this.props.email; }
  get passwordHash() { return this.props.passwordHash; }
  get profilePicture() { return this.props.profilePicture; }
}
