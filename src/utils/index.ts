import { getCollection, type CollectionEntry } from "astro:content";

export const add0 = (number: number | string) => {
  return Number(number) > 9 ? number.toString() : `0${number}`;
}

/**
 * 获取不是草稿的帖子并排序返回
 */
export const getSortedPosts = async (): Promise<Array<CollectionEntry<"blog">>> => {
  return (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
}

/**
 * 根据时间生成文章统一slug地址
 */
export const formatTimeToSlug = (date: string | Date): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = add0(d.getMonth() + 1);
  const day = add0(d.getDate());
  const hh = add0(d.getHours());
  const mm = add0(d.getMinutes());
  const ss = add0(d.getSeconds());
  return `${year}${month}${day}${hh}${mm}${ss}`;
}