# Learn RabbitMQ
Communicate 2 Service (Onboarding and Notification) with message broker RabbitMQ

## Tech Stack
- NodeJS
- ExpressJS
- PostgreSQL
- RabbitMQ
- Mailtrap

## Flow 
User Register => Onboarding API => Message Broker => Notification API => Send Email

## How to RUN
- set some configuration in .env file
- use docker to orchestration all service
```bash
docker compose up -d
```
- check if all container successfully running
```bash
docker container ls
```