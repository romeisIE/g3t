# Gitlab fetch Microservice

This service fetches new time entries from gitlab and publishes them on a message queue.

## Environment variables

| Variable | Meaning |
| ---      | ---     |
| `FETCH_INTERVAL`   | Milliseconds between two fetches, if 0 the service will start, fetch once and then stop |

