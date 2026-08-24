import { faker } from '@faker-js/faker';

import { UserEntity } from '../../src/entities/user.entity';

const DATA: UserEntity = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  username: faker.internet.username(),
};

export const USERMOCK = {
  DATA,
};
