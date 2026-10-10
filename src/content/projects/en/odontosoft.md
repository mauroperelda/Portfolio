---
title: OdontoSoft
summary: End-to-end dental practice management system. .NET backend, React frontend, JWT + BCrypt + RBAC.
description: >-
  Full-stack system for dental practices: patients, appointments, quotes,
  payments, clinical history, odontogram, periodontogram and images.
  Continuously built and maintained since 2025.
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
locale: en
---

## The problem

Dental practices usually run on closed systems or ad-hoc Excel sheets. My goal was to build something simple, responsive and with a serious data model that covers the full cycle: **patients, appointments, quotes, payments, clinical history, odontogram, periodontogram and images**.

## Architecture

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

## Technical decisions

- **Repository + Unit of Work** on top of EF Core 10, with stored procedures coexisting.
- **Shared JWT** between `OdontoSoft.API` and `ApiGetToken`: a single identity, two APIs.
- **RBAC** with roles and permissions signed as claims inside the token (1 query at login).
- **Automatic audit** (Created/Updated + user) on every entity via `SaveChanges()`.
- Frontend with **React 19 + Vite 8 + Tailwind 4**, custom Vite plugin to work around the http-proxy localhost bug.
- **BCrypt** with `workFactor=11` and lazy migration of legacy passwords.
- Code-behind of `OdontoSoft.Web` shared with the API (same entities, different handlers).

## Why it stands out

- It is the only public repo in the portfolio: anyone can see the real quality of the code.
- Covers backend + frontend + auth + multitenant architecture: shows end-to-end seniority.
- Documented decisions and explicit trade-offs in every commit.
---
