test -f .env && (rm .env && > .env) || > .env

read -p 'Set default environment (Y|N): ' results

if [ "$results" == "y" ] || [ "$results" == "Y" ] 
  then 
    echo "### Server config ###" >> .env
    echo "NODE_ENV=development" >> .env
    echo "HOST=0.0.0.0" >> .env
    echo "PORT=8080" >> .env
    echo >> .env
    echo "### Auth config ###" >> .env
    echo "AUTH_KEY_SECURITY=secret" >> .env
    echo "AUTH_KEY_TOKEN_EXPIRES=300000" >> .env
    echo >> .env
    echo "### Postgres config ###" >> .env
    echo "PG_CONNECTION_NAME=app" >> .env
    echo "PG_HOST=localhost" >> .env
    echo "PG_PORT=5432" >> .env
    echo "PG_NAME=root" >> .env
    echo "PG_USER=root" >> .env
    echo "PG_PASS=root" >> .env
    echo >> .env
    echo "### Redis config ###" >> .env
    echo "REDIS_HOST=localhost" >> .env
    echo "REDIS_PORT=27017" >> .env
    echo >> .env
    echo "### TypeORM config ###" >> .env
    echo "TRANSFORMER_KEY_SECURITY=secret" >> .env
    echo "TRANSFORMER_KEY_IV=secret" >> .env

else 
  echo ""
  echo "### Server config ###"
  echo ""

  echo "### Server config ###" >> .env

  read -p 'Node environment (development): ' INPUT
    [ -z "$INPUT" ] && echo "NODE_ENV=development" >> .env || echo "NODE_ENV=$INPUT" >> .env

  read -p 'Server host (0.0.0.0): ' INPUT
    [ -z "$INPUT" ] && echo "HOST=0.0.0.0" >> .env || echo "HOST=$INPUT" >> .env


  read -p 'Server port (8080): ' INPUT
    [ -z "$INPUT" ] && echo "PORT=8080" >> .env || echo "PORT=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Auth config ###"
  echo ""

  echo "### Auth config ###" >> .env

  read -p 'Auth key security (secret): ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_SECURITY=secret" >> .env || echo "AUTH_KEY_SECURITY=$INPUT" >> .env

  read -p 'Auth key expires (300000): ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_TOKEN_EXPIRES=300000" >> .env || echo "AUTH_KEY_TOKEN_EXPIRES=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Postgres config ###"
  echo ""

  echo "### Postgres config ###" >> .env

  read -p 'Connection name (app): ' INPUT
    [ -z "$INPUT" ] && echo "PG_CONNECTION_NAME=app" >> .env || echo "PG_CONNECTION_NAME=$INPUT" >> .env

  read -p 'SQL Server host (localhost): ' INPUT
    [ -z "$INPUT" ] && echo "PG_HOST=localhost" >> .env || echo "PG_HOST=$INPUT" >> .env

  read -p 'SQL Server port (5432): ' INPUT
    [ -z "$INPUT" ] && echo "PG_PORT=5432" >> .env || echo "PG_PORT=$INPUT" >> .env

  read -p 'SQL Server database (root): ' INPUT
    [ -z "$INPUT" ] && echo "PG_NAME=root" >> .env || echo "PG_NAME=$INPUT" >> .env

  read -p 'SQL Server user (root): ' INPUT
    [ -z "$INPUT" ] && echo "PG_USER=root" >> .env || echo "PG_USER=$INPUT" >> .env

  read -sp 'SQL Server password (root): ' INPUT
    [ -z "$INPUT" ] && echo "PG_PASS=root" >> .env || echo "PG_PASS=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Redis config ###"
  echo ""

  echo "### Redis config ###" >> .env

  read -p 'Redis host (localhost): ' INPUT
    [ -z "$INPUT" ] && echo "REDIS_HOST=localhost" >> .env || echo "REDIS_HOST=$INPUT" >> .env

  read -p 'Redis port (6379): ' INPUT
    [ -z "$INPUT" ] && echo "REDIS_PORT=6379" >> .env || echo "REDIS_PORT=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### TypeORM config  ###"
  echo ""

  echo "### TypeORM config ###" >> .env

  read -p 'Transformer key security (secret): ' INPUT
    [ -z "$INPUT" ] && echo "TRANSFORMER_KEY_SECURITY=localhost" >> .env || echo "TRANSFORMER_KEY_SECURITY=$INPUT" >> .env

  read -p 'Transformer key IV (secret): ' INPUT
    [ -z "$INPUT" ] && echo "TRANSFORMER_KEY_IV=secret" >> .env || echo "TRANSFORMER_KEY_IV=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"
fi


echo "Successfully!!"
echo ""