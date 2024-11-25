import { getArticleById } from "$lib/entities/Article";

export const load = async ({ params }) => {
  const article = await getArticleById(params.id);

  return {
    article: await article,
  };
};
