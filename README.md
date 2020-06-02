# yummy_pizza_api

sudo docker run --name yummy -e POSTGRES_PASSWORD=postgres -d postgres

sudo docker run -it --rm --link yummy:postgres postgres psql -h postgres -U postgres
