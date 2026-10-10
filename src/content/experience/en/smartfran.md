---
company: Smartfran S.R.L.
role: Backend Developer .NET
period:
  from: "2025-10"
  to: null
location: Córdoba, Argentina
remote: true
summary: "Building a multitenant POS on .NET 8 with Blazor Server, Auth0 multi-tenant auth, and Cosmos DB-backed reporting."
highlights:
  - "Designed shared-DB shared-schema multi-tenant model with tenant discriminator in Cosmos DB."
  - "Integrated Auth0 for JWT issuance with custom tenant and role claims (RBAC)."
  - "Async reporting pipelines with Azure Functions + Cosmos DB change feed, cutting dashboard latency by ~60%."
  - "xUnit + Testcontainers (SQL Server / Cosmos emulator) test coverage in GitHub Actions pipelines."
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
locale: en
---

Building Smartfran's core system: a multitenant POS that serves multiple retailers from a single database. The focus is on data isolation, cross-tenant query performance, and a flexible authorization model that ops teams can extend without redeploys.

---
