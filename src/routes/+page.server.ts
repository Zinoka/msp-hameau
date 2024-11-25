import { getArticles } from "$lib/entities/Article";

export const load = async ({ params }) => {
  const articles = await getArticles();

  return {
    articles: await articles,
  };
};
