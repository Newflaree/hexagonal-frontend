# Proyecto Frontend – Next.js + TypeScript con Arquitectura Hexagonal

![status](https://img.shields.io/badge/status-active-brightgreen)
![node](https://img.shields.io/badge/node-%3E=20.x-blue)

> **TL;DR**  
> Frontend modular basado en Next.js y principios de **Arquitectura Hexagonal** para lograr una solución **escalable, mantenible y de alto rendimiento**.

---

## ✨ Introducción

Este repositorio contiene el frontend de **Nombre-del-Proyecto**, un SPA/SSR construido con Next.js y TypeScript. Adoptamos **Arquitectura Hexagonal** para aislar la UI de la lógica de negocio y de los detalles de infraestructura, lo que permite:

- Evolucionar la aplicación sin “efecto dominó”.
- Sustituir servicios externos (APIs, bases de datos, etc.) sin reescribir reglas de negocio.
- Mejorar la experiencia de usuario mediante SSR, SSG y *code-splitting*.
- Incrementar la cobertura de tests de forma sencilla.

---

## 🏗 Visión rápida de la arquitectura

| Capa                        | Rol principal                                             | Ejemplos                           |
|-----------------------------|-----------------------------------------------------------|------------------------------------|
| **Interfaz de Usuario**     | Páginas y componentes Next.js / React                    | `pages/login.tsx`, `LoginForm`     |
| **Servicios de Aplicación** | Casos de uso y puertos que orquestan la lógica           | `LoginUserUseCase`, `AuthRepository` |
| **Dominio**                 | Entidades y *Value Objects* con reglas de negocio puras  | `User`, `Email`                    |
| **Infraestructura**         | Adaptadores que implementan los puertos                  | `AuthApiAdapter`, `fetchHttpClient` |

El flujo típico es **UI → Servicio de Aplicación → Dominio → Adaptador → Servicio externo**, y la respuesta regresa atravesando las mismas capas en sentido inverso.

---

## 🛠 Tecnologías

| Tecnología                    | Versión | Uso principal                                           |
|-------------------------------|---------|---------------------------------------------------------|
| **Next.js**                   | 15.3.5  | Framework React con SSR/SSG y enrutado automático       |
| **React / React DOM**         | 19.0.0  | Librería base de UI                                     |
| **TypeScript**                | 5.x     | Tipado estático y DX mejorada                           |
| **Tailwind CSS**              | 4.1.11  | Framework de estilos utilitarios                        |
| **PostCSS**                   | 8.5.6   | Pipeline de transformación CSS                          |
| **Zod**                       | 3.25.76 | Validación y *schemas* de datos                         |
| **ESLint**                    | 9.x     | Lint de código                                          |
| **eslint-config-next**        | 15.3.5  | Reglas recomendadas para proyectos Next.js              |
| **Husky + lint-staged** (op.) | —       | Hooks Git para calidad en cada commit                   |
| **npm**                       | 10.x    | Gestor de paquetes                                      |
| **Docker** (opcional)         | 25.x    | Contenedores para builds reproducibles                  |

---

## 📐 Principios arquitectónicos y buenas prácticas

| Categoría | Principio / práctica            | Breve descripción                                           |
|-----------|----------------------------------|-------------------------------------------------------------|
| **Arquitectura** | Hexagonal / Ports & Adapters | Separación clara de capas; dominio independiente de frameworks |
|               | DDD táctico                     | *Entities* y *Value Objects* bien definidos                 |
| **Código**      | SOLID                         | Énfasis en SRP e inversión de dependencias                  |
|               | Tipado estricto                 | `strict` + `noUncheckedIndexedAccess` en `tsconfig`         |
| **CI/CD**       | Lint & Test on push           | Se bloquean PR si fallan linter o tests                     |
| **UX**          | SSR / SSG                     | Mejora FCP & SEO, reduce TTI                                |
| **Performance** | *Code splitting* & *lazy*     | Carga por página + imports dinámicos                        |

---

## 🚀 Instrucciones para levantar en local

1. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. ****
   ```bash
   npm run dev
   ```

