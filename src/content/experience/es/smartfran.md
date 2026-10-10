---
company: Smartfran S.R.L.
role: Backend Developer .NET
period:
  from: "2025-10"
  to: null
location: Córdoba, Argentina
remote: true
summary: "Desarrollo de un POS multitenant sobre .NET 8 con Blazor Server, autenticación Auth0 multi-tenant y reporting con Cosmos DB."
highlights:
  - "Diseño de schema multi-tenant (shared DB, shared schema) con discriminator por tenant en Cosmos DB."
  - "Integración con Auth0 para JWT con claims custom de tenant y roles granulares (RBAC)."
  - "Pipelines de reporting async con Azure Functions + Cosmos DB change feed para reducir latencia del dashboard en un 60%."
  - "Cobertura de tests xUnit + Testcontainers (SQL Server / Cosmos emulator) en pipelines de GitHub Actions."
stack:
  - ".NET 8"
  - "C#"
  - "Blazor Server"
  - "Cosmos DB"
  - "Auth0"
  - "Azure Functions"
  - "xUnit"
  - "GitHub Actions"
order: 1
locale: es
---

Construyendo el sistema core de Smartfran: un POS multitenant que sirve a múltiples retailers desde una única base de datos. El foco está en aislamiento de datos, performance de consultas entre tenants y un modelo de autorización flexible que los equipos de operaciones puedan extender sin redeploys.

---
