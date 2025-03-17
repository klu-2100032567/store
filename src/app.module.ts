// backend/src/app.module.ts
// Main application module for managing dependencies
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Chowdary999@',
      database: 'ratings_app',
      autoLoadEntities: true,
      synchronize: true, // Auto sync schema for dev environment
    }),
    UsersModule,
    StoresModule,
  ],
})
export class AppModule {}
