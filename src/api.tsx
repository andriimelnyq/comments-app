const BASE_URL = 'https://dummyjson.com';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export const getComments = async () => {
  await wait(500);

  const url = `${BASE_URL}/comments`;

  return fetch(url).then(res => res.json());
};

export const deleteComment = async (id: number) => {
  await wait(500);

  const url = `${BASE_URL}/comments/${id}`;

  return fetch(url).then(res => res.json());
};

export const addComment = async (comment: string) => {
  await wait(500);

  const url = `${BASE_URL}/comments/add`;

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: comment,
      postId: 3,
      userId: 5,
    }),
  }).then(res => res.json());
};
