---
title: OdontoSoft
summary: "Sistema de gestión para consultorios odontológicos: turnos, historia clínica, facturación y reportes."
description: "OdontoSoft es un sistema de gestión para consultorios odontológicos pequeños y medianos. Cubre el ciclo completo: agenda de turnos, historia clínica por paciente con adjuntos, presupuestos y planes de tratamiento, facturación con AFIP y reportes de producción.\n\nEl proyecto es open source y está publicado en GitHub. Está pensado para correr on-premise (Windows + SQL Server) o en un VPS Linux con SQL Server en contenedor.\n\nEl problema: los odontólogos manejan la clínica con combinaciones de Excel + WhatsApp + papel, lo que genera pérdida de información y errores en cobros. OdontoSoft centraliza todo en un único sistema con backups automáticos y trazabilidad completa.\n\nLa arquitectura sigue Clean Architecture con tres proyectos principales: Domain (entidades y reglas de negocio), Application (casos de uso y DTOs) e Infrastructure (EF Core, acceso a datos, integraciones). El frontend es Blazor Server para mantener una única base de código C# end-to-end.\n\nDecisiones técnicas clave: Blazor Server sobre WebAssembly porque la clínica típicamente opera con conexión estable y queremos SEO/render rápido del primer paint; EF Core con migrations para que el schema evolucione versionado; autenticación con ASP.NET Identity + JWT para futuras integraciones con apps móviles; reportes con QuestPDF por su API fluida y resultado pixel-perfect."
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
locale: es
---
