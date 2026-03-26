# Artify - Plataforma E-commerce y Portfolio

Artify es una plataforma moderna construida para gestionar productos y ventas, ideal como proyecto de portfolio. Desarrollada con tecnologías modernas, cuenta con un backend robusto basado en Prisma ORM conectado a PostgreSQL, un frontend dinámico construido en Next.js (con App Router), e integración con MercadoPago y NextAuth para autenticación y pagos seguros.

## Características Principales

- **Gestión de Productos y Categorías:** Agrega, edita y elimina productos rápidamente. Los productos cuentan con imágenes y descripciones detalladas.
- **Autenticación (NextAuth):** Sistema seguro de registro e inicio de sesión de usuarios con soporte para diferentes roles (ADMIN y USER).
- **Relaciones entre Usuarios y Ventas:** Sistema completo para vendedores y clientes, con detalles precisos sobre transacciones y estado del producto.
- **Billetera y Configuración de Pagos:** Implementación de MercadoPago y gestión de CBU/Alias y saldo (wallet) de los vendedores.
- **Dashboard y Panel Administrativo:** Una interfaz de usuario para que los administradores y usuarios tengan control total sobre su perfil y sus ventas.
- **ORM Potente (Prisma):** Modelos definidos de forma clara para usuarios, provincias, productos, reseñas y ventas.

## Arquitectura y Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (React 18)
- **Base de Datos y ORM:** PostgreSQL a través de [Prisma](https://www.prisma.io/)
- **Gestión de Estado:** Redux Toolkit y React-Redux
- **Estilizado:** Tailwind CSS + Autoprefixer
- **Autenticación:** NextAuth.js
- **Pagos:** MercadoPago SDK React / Server
- **Carga de Archivos / Imágenes:** UploadThing Server/React

## Requisitos Previos

Para ejecutar la aplicación localmente, asegúrate de tener instalados:

- **Node.js** v18+ y un gestor de paquetes (`npm`, `yarn` o `pnpm`).
- **PostgreSQL**: Se necesita una base de datos local o en la nube (ej. [Vercel Postgres](https://vercel.com/postgres), Supabase, Railway, etc.). 

## Cómo Ejecutar el Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/H3rC4/Artify.git
cd Artify
```

### 2. Instalar Dependencias

Es posible que tengas que utilizar el flaj `--legacy-peer-deps` por conflictos de dependencias en React 18:
```bash
npm install --legacy-peer-deps
```

### 3. Configurar Variables de Entorno

Puedes tomar como base el archivo `.env.template` generado. Crea en la raíz del proyecto un archivo `.env` y añade tus credenciales:

```env
# Conexión a Base de Datos PostgreSQL
POSTGRES_PRISMA_URL="postgres://tu_usuario:tu_password@host/nombre_db"
POSTGRES_URL_NON_POOLING="postgres://tu_usuario:tu_password@host/nombre_db"
POSTGRES_SHADOW_URL="postgres://tu_usuario:tu_password@host/nombre_db_shadow" # (Solo en db en la nube)

# Soportado por NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu_secreto_super_seguro_para_nextauth"

# (Opcional) Variables para otras integraciones como MercadoPago, UploadThing, etc.
```

### 4. Inicializar Prisma

Para aplicar el esquema a la base de datos y generar el cliente local de Prisma, ejecuta:

```bash
# Sincroniza el estado y genera migraciones (úsalo en desarrollo local)
npx prisma migrate dev --name init

# Genera el cliente Prisma
npx prisma generate
```

*(Nota: si solo quieres subir la estructura de datos sin historial, puedes usar `npx prisma db push`)*.

### 5. Iniciar el Servidor de Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador preferido. El aplicativo actualizará sus páginas automáticamente en tiempo real frente a los cambios en el código.

## Semillas (Seeding) de Base de Datos

Si el proyecto cuenta con el archivo `prisma/seed.js`, puedes popular la base de datos ejecutando el comando:

```bash
npm run db:seed
```

---
Creado por Hernán Caballero (H3rC4).
