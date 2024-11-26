import { DataSource } from "typeorm";
import { env_variables } from "../../../hooks.server";
import { Article } from "$lib/entities/Article";
import { User } from "$lib/entities/User";

class TypeOrm {
  private static instance: Promise<DataSource> | null = null;

  private constructor() {}

  public static getDb(): Promise<DataSource> {
    if (!TypeOrm.instance) {
      TypeOrm.instance = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: env_variables.parsed.DB_USERNAME,
        password: env_variables.parsed.DB_PASSWORD,
        database: "msp_hameau",
        synchronize: false,
        entities: [Article, User],
        logging: false,
      })
        .initialize()
        .then((fulfilled) => {
          console.info("Database has been initialized !");
          return fulfilled;
        })
        .catch((err) => {
          console.error("Error during Data Source initialization", err);
          return null;
        });
    }
    return TypeOrm.instance;
  }
}

export default TypeOrm;
