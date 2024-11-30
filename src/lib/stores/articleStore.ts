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
