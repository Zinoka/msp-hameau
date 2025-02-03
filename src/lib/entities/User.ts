import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { db } from "../../hooks.server";

@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  accessToken: string;
}

export const getUserByEmail = async (body: any) => {
  const user = await db.getRepository(User).findOneBy({
    email: body.email,
    password: body.password,
  });

  return structuredClone(user);
};

export const getUserByAccessToken = async (accessToken: string) => {
  const user = await db.getRepository(User).findOneBy({
    accessToken: accessToken,
  });

  return user ? true : false;
}