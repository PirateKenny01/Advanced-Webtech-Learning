import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProfilesModule,TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'PG13579@',
    database: 'devmatch',
    autoLoadEntities: true,
    synchronize: true,
   }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
