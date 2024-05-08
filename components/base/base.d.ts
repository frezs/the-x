export interface ILink {
  url: string
  name?: string
}

export interface IExtItem extends ILink {
  name: string
}

export interface ICover extends ILink {
}