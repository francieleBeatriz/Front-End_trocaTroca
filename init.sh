# Verificar se o arquivo de marcação existe
if [ ! -f .initialized ]; then
    # Garantindo que vou estar no diretóriio que contém meu package.json
    cd /application

    # Instalando as dependencias necessárias
    npm install

    # Criar o arquivo de marcação
    touch .initialized
fi
 
# Comando principal do contêiner
exec "$@"