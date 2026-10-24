# NestJS — Reforzamiento (Products CRUD)

API REST de productos hecha con **NestJS**, como primera sección del curso [NestJS + Microservicios](https://www.udemy.com/course/nestjs-microservicios/) (Udemy, DevTalles). Sirve para repasar las bases de Nest antes de pasar a microservicios.

> Proyecto de práctica, **en progreso**. Se irá actualizando a medida que avance el curso.

## Qué se practica

- Estructura de un proyecto NestJS (módulos, controladores y servicios)
- CRUD de productos (crear, listar, actualizar y eliminar)
- Validación de datos con DTOs
- Manejo de respuestas y errores
- Variables de entorno validadas con Joi

## Stack técnico

- **NestJS 12** + **TypeScript**
- **Joi** — validación de variables de entorno
- **Vitest** — pruebas
- **Oxlint** y **Prettier** — calidad y formato del código

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/developer-ortega/nestjs-reforzamiento.git
   cd nestjs-reforzamiento
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```
   Si npm falla con `Cannot read properties of null (reading 'edgesOut')`, usar `npm install --legacy-peer-deps`.

3. Crear un archivo `.env` en la raíz (usar `.env.example` como referencia):
   ```
   PORT=3000
   ```

4. Iniciar en modo desarrollo:
   ```bash
   npm run start:dev
   ```
   La API queda en `http://localhost:3000`.

## Scripts disponibles

```bash
npm run start:dev   # Desarrollo con recarga automática
npm run build       # Compila a /dist
npm run start:prod  # Ejecuta el build
npm run lint        # Oxlint
npm run test        # Pruebas unitarias
```

## Siguiente paso

Continuar con la arquitectura de microservicios: Products y Orders con Prisma, Gateway, NATS, Docker y pagos con Stripe.
