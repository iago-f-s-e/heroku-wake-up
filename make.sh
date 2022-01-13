test -f .env && (rm .env && > .env) || > .env

read -p 'Set default environment (Y|N): ' results

if [ "$results" == "y" ] || [ "$results" == "Y" ] 
  then 
    echo "### Server config ###" >> .env
    echo "HOST=0.0.0.0" >> .env
    echo "PORT=8080" >> .env
    echo >> .env
    echo "### Auth config ###" >> .env
    echo "AUTH_KEY_SECURITY=secret" >> .env
    echo >> .env

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

  echo >> .env
  echo ""
  echo "----------------------------"
fi


echo "Successfully!!"
echo ""