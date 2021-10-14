# Create Time Entry Microservice Service

This microservice takes a timeentry message from a queue, e.g. RabbitMQ, and persists it into the database.
As we want to deploy this into cloud environments, multiple queue and database implementation must be supported

## Environment variables

| Variable | Meaning |
| ---      | ---     |
| `FETCH_INTERVAL`   | Milliseconds between the fetches, if 0 then the deletion will only be executed once and the container stops. |

