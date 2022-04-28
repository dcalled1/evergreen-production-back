export default () => {
  const configuration = {
    app: {
      port:
        parseInt(process.env.PORT) ||
        parseInt(process.env.APP_PORT, 10) ||
        3000,
    },
    database: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      name: process.env.DATABASE_NAME,
      protocol: process.env.DATABASE_PROTOCOL,
      host: process.env.DATABASE_HOST,
      params: process.env.DATABASE_PARAMS,
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    },
  };

  const buildConnectionString = (conf: any) => {
    conf.database.connectionString = `${conf.database.protocol}://${
      conf.database.user
    }:${conf.database.password}@${conf.database.host}${
      conf.database.protocol.endsWith('+srv') ? '' : ':' + conf.database.port
    }/${conf.database.name}?${conf.database.params}`;
    return conf;
  };
  return buildConnectionString(configuration);
};
