---
title: OdontoSoft
summary: Sistema de gestión odontológica end-to-end. Backend .NET, frontend React, JWT + BCrypt + RBAC.
description: >-
  Sistema full-stack para consultorios odontológicos: pacientes, turnos,
  presupuestos, pagos, historia clínica, odontograma, periodontograma e
  imágenes. Construido y mantenido de forma continua desde 2025.
featured: true
repoUrl: https://github.com/mauroperelda/Odontosoft
repoUrlSecondary: https://github.com/mauroperelda/OdontosoftBack
stack:
  - .NET 10
  - C#
  - EF Core
  - SQL Server
  - React 19
  - Vite 8
  - Tailwind 4
  - JWT
  - BCrypt
coverGradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
order: 1
locale: es
---

## El problema

Los consultorios odontológicos suelen usar sistemas cerrados o armados con Excel. Mi objetivo fue construir algo simple, responsive y con un modelo de datos serio, que cubra el ciclo completo: **pacientes, turnos, presupuestos, pagos, historia clínica, odontograma, periodontograma e imágenes**.

## Arquitectura

```
┌──────────────────────┐        ┌──────────────────────┐
│  OdontoSoft.Web      │        │  odontosoft-front    │
│  (MVC Razor)         │        │  (React + Vite)      │
└──────────┬───────────┘        └──────────┬───────────┘
           │ cookie                          │ JWT
           ▼                                 ▼
┌──────────────────────┐        ┌──────────────────────┐
│  OdontoSoft.API      │◄─JWT──►│  ApiGetToken         │
│  (REST, [Authorize]) │ shared │  (BCrypt + RBAC)     │
└──────────┬───────────┘        └──────────┬───────────┘
           │ EF Core                        │ EF Core
           ▼                                ▼
   SQL Server                       SQL Server
   (Odontosoft)                     (MANAGER_ODONTOSOFT)
```

## Decisiones técnicas

- **Repository + Unit of Work** sobre EF Core 10, con stored procedures coexistiendo.
- **JWT compartido** entre `OdontoSoft.API` y `ApiGetToken`: una sola identidad, dos APIs.
- **RBAC** con roles y permisos firmados como claims dentro del token (1 query en el login).
- **Auditoría automática** (Created/Updated + user) en todas las entidades vía `SaveChanges()`.
- Frontend con **React 19 + Vite 8 + Tailwind 4**, custom Vite plugin para sortear el bug de http-proxy con localhost.
- **BCrypt** con `workFactor=11` y migración lazy de passwords legadas.
- Code-behind de `OdontoSoft.Web` compartido con la API (mismas entities, distintos handlers).

## Por qué lo destaca

- Es el único repo público del portfolio: cualquiera puede ver la calidad real del código.
- Cubre backend + frontend + auth + arquitectura multitenant: muestra senioridad end-to-end.
- Tiene decisiones documentadas y trade-offs explícitos en cada commit.
---
