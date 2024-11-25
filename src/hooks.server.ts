import { building } from "$app/environment";
import TypeOrm from "$lib/server/database/database";
import * as dotenv from "dotenv";
import "reflect-metadata";

export let env_variables: dotenv.DotenvConfigOutput;
export let db: any;

if (!building) {
  env_variables = dotenv.config();
  db = await TypeOrm.getDb();
}
