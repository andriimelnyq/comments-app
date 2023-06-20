export interface CommentType {
  id: number,
  body: string,
  postId: number,
  user: {
    id: number,
    username: string,
  }
}
