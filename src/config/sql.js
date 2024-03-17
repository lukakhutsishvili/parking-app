import pgk from "pg";

const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-cnqqs2q1hbls73dseo60-a",
  port: 5432,
  database: "parking_app_n1t8",
  user: "parking_app_n1t8_user",
  password: "lh5bQVHIgKFO6gwukImMubAYHta01Kia",
});

export const createTable = async () => {
  return await pool.query("CREATE IF NOT EXISTS TABLE user(id SERIAL PRIMARY KEY, name TEXT, carType TEXT, password TEXT )");
};
