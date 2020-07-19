# Typescript NodeJS template

- NodeJS 
  - Typescript
  - Middleware data verification
- Posgresql DB (Docker, Sequelize ORM)
  - Migration
  - Models
  - Seeders
- Documentation
  - Swagger
  - Apidoc

### Install
```sh
# copy environment
cp ./.env.development ./.env

# install all packages
npm install

# docker-compose postgresql start
docker-compose up -d

# compile migrations & seeder
tsc ./src/database/migrations/20190928164155-create-progress.ts
tsc ./src/database/migrations/20190928164355-create-students.ts
tsc ./src/database/seeders/20190928164155-seed-progress.ts
tsc ./src/database/seeders/20190928164355-seed-students.ts

# migrate db structure
sequelize-cli db:migrate

# create examples users for develop
sequelize-cli db:seed:all
```

### Generate DOCS apidoc
```
npm install apidoc -g
apidoc -i .\src\ -o .\public\apidoc
apidoc-swagger -i .\src\ -o .\public\swagger
```

### Public DOCS 
```sh
http://127.0.0.1:8090/apidoc    # apidoc
http://127.0.0.1:8090/swagger   # swagger
```
### Start server
```
npm run start
```

## TODO
- Tests (mocha)
