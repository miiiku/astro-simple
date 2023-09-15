import { getCollection, type CollectionEntry } from "astro:content";

/**
 * 获取不是草稿的帖子并排序返回
 */
export const getSortedPosts = async (): Promise<Array<CollectionEntry<"blog">>> => {
  return (await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })).sort((a, b) => {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
}

/**
 * 根据文章时间生成永久链接
 */
export const generatePermalink = (date: string | Date): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = (d.getDate()).toString().padStart(2, "0");
  const hh = (d.getHours()).toString().padStart(2, "0");
  const mm = (d.getMinutes()).toString().padStart(2, "0");
  const ss = (d.getSeconds()).toString().padStart(2, "0");
  return `${year}${month}${day}${hh}${mm}${ss}`;
}