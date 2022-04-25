import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get('database.connectionString');
        return {
          uri: connectionString,
          connectionFactory: (connection: Connection) => {
            console.log(connectionString);
            connection.on('connected', () => {
              console.log(connectionString);
              console.log('====================================');
              console.log('DB is connected');
              console.log('====================================');
            });
            connection.on('disconnected', () => {
              console.log(connectionString);
              console.log('====================================');
              console.log('DB disconnected');
              console.log('====================================');
            });
            connection.on('error', (error) => {
              console.log(connectionString);
              console.log('====================================');
              console.log('DB connection failed! for error: ', error);
              console.log('====================================');
            });

            return connection;
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
