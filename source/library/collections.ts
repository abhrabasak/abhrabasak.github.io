import { getCollection, type DataEntryMap } from "astro:content";

export const data = async <T,>(cs: keyof DataEntryMap) =>
  (await getCollection(cs)).map((c) => ({ ...(c.data as T), id: c.id }));

export const dataMap = async <T,>(cs: keyof DataEntryMap) =>
  new Map((await getCollection(cs)).map((c) => [c.id, c.data as T]));
