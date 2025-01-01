import { http, delay, HttpResponse } from 'msw';
import { nanoid } from '@reduxjs/toolkit';

const token = nanoid();

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const info = await request.formData();

    const username = info.get('username');
    const password = info.get('password');

    await delay(2000);

    return HttpResponse.json({
      user: {
        username: username,
        password: password,
      },
      token,
    });
  }),
];
