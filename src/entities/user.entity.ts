class UserEntity {
  id?: string;
  // eslint-disable-next-line
  //@ts-ignore
  name: string;
  // eslint-disable-next-line
  //@ts-ignore
  username: string;
  // eslint-disable-next-line
  //@ts-ignore
  email: string;

  private constructor({ name, username, email }: UserEntity) {
    return Object.assign(this, {
      name,
      username,
      email,
    });
  }

  static create({ name, username, email }: UserEntity) {
    const user = new UserEntity({ name, username, email });
    return user;
  }
}

export { UserEntity };
