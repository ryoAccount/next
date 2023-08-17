export type BlogProps = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string
  body: string
}

export type ContextProps = {
  params: { 
    id: string
  },
  locales?: string,
  locale?: string,
  defaultLocale?: string
}