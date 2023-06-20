import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export const getComments = async () => {
  await wait(500);

  const url = `${BASE_URL}/comments`;

  return axios.get(url).then(res => res.data);
};

export const deleteComment = async (id: number) => {
  await wait(500);

  const url = `${BASE_URL}/comments/${id}`;

  return axios.delete(url).then(res => res.data);
};

export const addComment = async (comment: string) => {
  await wait(500);

  const url = `${BASE_URL}/comments/add`;

  const requestBody = {
    body: comment,
    postId: 3,
    userId: 5,
  };

  return axios.post(url, requestBody).then(res => res.data);
};
