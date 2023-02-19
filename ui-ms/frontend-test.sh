#!/bin/bash

# Build the Docker image
docker build -t jokes-messages-ui .

# Start the container
docker run -p 80:80 -d jokes-messages-ui

# Test the service
curl http://localhost

# Stop the container
