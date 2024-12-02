import { createArticle, getArticles } from "$lib/entities/Article";
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
    let hasImage = false;
    let timeStamp = null;
    let fileName = "";

    if ((formData.fileToUpload as File).name) {
      const { fileToUpload } = formData as { fileToUpload: File };

      timeStamp = new Date().getTime();

      writeFileSync(
        `static/uploads/${timeStamp}-${fileToUpload.name}`,
        Buffer.from(await fileToUpload.arrayBuffer())
      );

      fileName = fileToUpload.name;
      hasImage = true;
    }

    createArticle({
      title: formData.title,
      description: formData.description,
      image: hasImage ? `${timeStamp}-${fileName}` : null,
    });

    return {
      success: true,
    };
  },
};
