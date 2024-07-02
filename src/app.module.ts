import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MakerModule } from './maker/maker.module';
import { MedicamentModule } from './medicament/medicament.module';
import { SeriesModule } from './series/series.module';
import { DatamatrixMedicamentModule } from './datamatrix_medicament/datamatrix_medicament.module';
import { Code128BoxModule } from './code128_box/code128_box.module';
import { SpoilageModule } from './spoilage/spoilage.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
      }),
      inject: [ConfigService],
    }),
    UserModule,
    MakerModule,
    MedicamentModule,
    SeriesModule,
    DatamatrixMedicamentModule,
    Code128BoxModule,
    SpoilageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
