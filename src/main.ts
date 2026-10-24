import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // '/api como prefijo'
  app.setGlobalPrefix('api');

  // Validaciones para que la propiedad sea correcta
  // whiteList: Remueve todo lo que no está 
  // incluído en los DTOs
  // forbidNonWhiteListed: Retorna bad request 
  // si hay propiedades en el objeto no requeridas 
  app.useGlobalPipes( 
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  await app.listen(envs.port);
}
await bootstrap();
