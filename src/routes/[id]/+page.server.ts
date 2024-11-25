import { getArticleById } from "$lib/entities/Article";

export const load = async ({ params }) => {
  const article = await getArticleById(params);

  return {
    article: (await article) ?? null,
  };
};
