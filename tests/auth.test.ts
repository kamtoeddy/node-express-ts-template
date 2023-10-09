import request from 'supertest';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { createServer } from '../src/server';

let api: request.SuperTest<request.Test>, server: any;

describe.concurrent('auth', () => {
  beforeEach(() => {
    server = createServer();
    api = request(server);
  });
  afterEach(() => server?.close?.());

  it('should return greeting message on startup', async () => {
    const res = await api.post('/auth/login');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      data: { message: 'Work in progress!' },
      success: false
    });
  });
});
