import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync("./secrets/key.pem", "utf8"),
  cert: fs.readFileSync("./secrets/server.crt", "utf8"),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
