export type Url = string | null

export type SigninRequest = {
  username: string
  password: string
  email: string
  lastName: string
  firstName: string
}

export interface IFAuthRps {
  id: string
  username: string
  email: string
  display_name: string
  avatar: Url
}

export interface IFAuthoerInfo {
  id: string
  display_name: string
  avatar: Url
}

export interface IFPostList {
  id: string
  title: string
  image: Url
  countLike: number
  countComment: number
  release_date: string
  author: IFAuthoerInfo
  isUpvote: boolean
}
export interface IFTags {
  name: string
  slug: string
}
export interface IFPostView {
  id: string
  title: string
  content: string
  countLike: number
  countComment: number
  image: Url
  release_date: string
  author: IFAuthoerInfo
  tags: IFTags[]
  isUpvote: boolean
}

export interface IFCommentList {
  id: string
  content: string
  image: Url
  release_date: string
  author: IFAuthoerInfo
}

export interface IFUserView {
  id: string
  username: string
  email: string
  display_name: string
  avatar: Url
  banner: Url
}

export interface IFPhotoList {
  id: string
  url: Url
}
