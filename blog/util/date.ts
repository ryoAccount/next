// Date utils
export const dateFormat = (publishedAt: string) => {
  return new Date(publishedAt).toLocaleDateString()
}