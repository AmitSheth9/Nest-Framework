import { Ocean } from 'src/oceans/entities/ocean.entity';
import { River } from 'src/rivers/entities/river.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.API_URL,
  host: process.env.DATABASE_URL,
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  ssl: false,
  synchronize: true,
  entities: [Ocean, River],
};

export default config;
