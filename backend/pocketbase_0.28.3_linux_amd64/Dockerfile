FROM alpine:latest

# Installe les dépendances
RUN apk --no-cache add ca-certificates

# Copie PocketBase dans le conteneur
WORKDIR /app
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# Donne les droits d'exécution
RUN chmod +x /app/pocketbase

# Expose le port utilisé par PocketBase
EXPOSE 8080

# Lance PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
