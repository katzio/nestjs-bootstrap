# NestJS Bootstrap

- [x] Dockerized
  - [x] Run
  - [x] Debug (VSCode task and launch)
- [ ] Database(s)
  - [ ] SQL: Postgress
  - [ ] NoSQL: MongoDB
- [ ] Background Workers / Delayed Jobs
- [ ] Event Driven Development
  - [ ] Pub/Sub Service (External)
  - [ ] Pub/Sub Client

## Improvements

- [x] Dockerfile multistage support


## How to use

### Run

```bash
$ docker-compose up
```
go to http://localhost:3000 (env var service port in `.env` file)

### Debug (VSCode)

1. Run 'Debug mode' task
2. Run 'Attach to NestJS' launch configuration
3. Set breakpoints and enjoy

### Tests

1. Attach to container and run `npm run test`