#!/bin/bash

# Build the Docker images
docker-compose build

# Start the containers
docker-compose up -d

# Wait for the services to start
sleep 10

# Test the services
curl http://localhost:8080/jokes
curl http://localhost:8081/messages

# Stop the containers
docker-compose down
