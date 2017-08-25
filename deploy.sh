app_name=$(heroku apps:info | grep === | awk '{print $2}')
version=$(git rev-parse HEAD)
yarn build
$(cd dist && heroku builds:create --version "${version}" -a ${app_name} --tar $(which gtar))