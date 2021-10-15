# Timeentry Export Microservice

This microservice provides an api for exporting timeentries of a user within a certain timerange and in various formats.
As we plan to deploy this in different environments, this service must support different database implementations.

Planned formats are:
- CSV
- Excel
- PDF

## Environment variables

| Variable | Meaning |
| ---      | ---     |
| PORT     | Port this service is listening for http requests |

