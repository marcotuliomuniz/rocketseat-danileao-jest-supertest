import { beforeEach, afterEach, describe, expect, it } from '@jest/globals';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createApp } from '../src/app';
import request from 'supertest';
import { USERMOCK } from './mocks/user.mock';

describe('Create User Service', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    app = await createApp();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('It should be possible to create a user.', async () => {
    const response = await request(app.getHttpServer())
      .post('/user/create')
      .send(USERMOCK.DATA);

    expect(response.status).toBe(201);
  });

  it('should not allow creating a user with a duplicate username', async () => {
    await request(app.getHttpServer()).post('/user/create').send(USERMOCK.DATA);

    const response = await request(app.getHttpServer())
      .post('/user/create')
      .send(USERMOCK.DATA);

    expect(response.status).toBe(409);
  });
});
