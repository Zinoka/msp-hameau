import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { db } from "../../hooks.server";

@Entity({ name: "article" })
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  created_at: string;

  @Column({ type: "varchar" })
  imageName: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "boolean" })
  enable: string;
}

export const getArticleById = async (body: any) => {
  try {
    const article = await db.getRepository(Article).findOneBy({
      id: body.id,
    });
    return structuredClone(article);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getArticles = async () => {
  try {
    const articles = await db.getRepository(Article).find();
    return structuredClone(articles);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const disableArticleById = async (article: any) => {
  try {
    const originalDate = new Date(article.id.created_at);
    article.id.created_at = originalDate.toISOString().split("T")[0];

    await db
      .getRepository(Article)
      .update(article.id.id, { enable: !article.id.enable });
  } catch (error) {
    console.error(error);
  }
  return;
};

export const createArticle = async (article: any) => {
  try {
    const date = new Date();

    article.created_at = date.toISOString().split("T")[0];
    article.enable = true;
    article.imageName = article.image;

    await db.getRepository(Article).insert(article);
  } catch (error) {
    console.error(error);
  }
  return;
};
