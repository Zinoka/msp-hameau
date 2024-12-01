export const switchArticleStatus = (article: any) => {
  fetch("/api/article/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sveltekit-action": "true",
    },
    body: JSON.stringify({
      id: article,
    }),
  });
};

export const createArticle = async (article: any) => {
  await fetch("/api/article/post/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sveltekit-action": "true",
    },
    body: article,
  });
};
