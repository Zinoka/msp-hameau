import { createArticle, getArticles } from "$lib/entities/Article";
import { fail } from "@sveltejs/kit";
import { writeFileSync } from "fs";

export const load = async ({ params }) => {
  const articles = await getArticles();

  return {
    articles: await articles,
  };
};

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    if (
      !(formData.fileToUpload as File).name ||
      (formData.fileToUpload as File).name === "undefined"
    ) {
      return fail(400, {
        error: true,
        message: "You must provide a file to upload",
      });
    }

    const { fileToUpload } = formData as { fileToUpload: File };

    const timeStamp = new Date().getTime();

    writeFileSync(
      `static/uploads/${timeStamp}-${fileToUpload.name}`,
      Buffer.from(await fileToUpload.arrayBuffer())
    );

    createArticle({
      title: formData.title,
      description: formData.description,
      image: `${timeStamp}-${fileToUpload.name}`,
    });

    return {
      success: true,
    };
  },
};
