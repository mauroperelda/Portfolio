---
title: OdontoSoft
summary: "Management system for dental clinics: appointments, clinical history, invoicing, and reports."
description: "OdontoSoft is a management system for small and mid-sized dental clinics. It covers the full cycle: appointment scheduling, per-patient clinical history with attachments, treatment plans and budgets, AFIP invoicing, and production reports.\n\nThe project is open source and published on GitHub. It's designed to run on-premise (Windows + SQL Server) or on a Linux VPS with SQL Server in a container.\n\nThe problem: dentists run their clinics with combinations of Excel + WhatsApp + paper, which causes information loss and billing errors. OdontoSoft centralizes everything in a single system with automated backups and full auditability.\n\nThe architecture follows Clean Architecture with three main projects: Domain (entities and business rules), Application (use cases and DTOs) and Infrastructure (EF Core, data access, integrations). The frontend is Blazor Server to keep a single end-to-end C# codebase.\n\nKey technical decisions: Blazor Server over WebAssembly because clinics typically operate on stable connections and we want fast first-paint rendering; EF Core with migrations so the schema evolves in a versioned way; ASP.NET Identity + JWT auth for future mobile app integrations; QuestPDF for reports because of its fluent API and pixel-perfect output."
featured: true
repoUrl: "https://github.com/mauroperelda/Odontosoft"
stack:
  - ".NET 8"
  - "Blazor Server"
  - "EF Core"
  - "SQL Server"
  - "ASP.NET Identity"
  - "QuestPDF"
  - "Clean Architecture"
  - "xUnit"
order: 1
locale: en
---
