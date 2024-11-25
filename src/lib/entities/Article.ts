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
}

export const getArticleById = async (body: any) => {
  const article = await db.getRepository(Article).findOneBy({
    id: body.id,
  });

  return structuredClone(article);
};

export const getArticles = async () => {
  const articles = await db.getRepository(Article).find();

  return structuredClone(articles);
};
