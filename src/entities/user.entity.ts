class UserEntinty {
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

  private constructor({ name, username, email }: UserEntinty) {
    return Object.assign(this, {
      name,
      username,
      email,
    });
  }

  static create({ name, username, email }: UserEntinty) {
    const user = new UserEntinty({ name, username, email });
    return user;
  }
}

export { UserEntinty };
