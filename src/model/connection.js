import { createConnection } from "mysql2/promise";
export const connection = async () => {
    return createConnection({
      host: process.env.NEXT_PUBLIC_MYSQL_HOST,
      port: process.env.NEXT_PUBLIC_MYSQL_PORT,
      user: process.env.NEXT_PUBLIC_MYSQL_USER,
      password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
      database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
    });
  };