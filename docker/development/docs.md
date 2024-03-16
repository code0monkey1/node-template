BUILDING DOCKER IMAGE : `docker build -t node-template-docker-image .`

RUNNING DOCKER CONTAINER : `docker run --env-file .env  --rm -d  -p 3000:3000 -v $(pwd):/usr/src/app  --name node-template-docker-container  node-template-docker-image`

VIEWING RUNNING CONTAINERS : `docker ps`

STOPPING DOCKER CONTAINER : `docker stop node-template-docker-container`
