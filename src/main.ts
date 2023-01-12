import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('E-Log')
        .setDescription('E-Log API')
        .setVersion('1.0')
        .addTag('auth')
        .addBearerAuth(
            {
                name: 'Authorization',
                bearerFormat: 'Bearer',
                scheme: 'Bearer',
                type: 'http',
                in: 'Header',
            },
            'access-token',
        )
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 9000);
}
bootstrap();
