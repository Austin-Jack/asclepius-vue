#!/bin/zsh
npm run build
rm -rf asclepius*
cp -r resource/ dist
mv ./dist ./asclepius
tar -czf asclepius.tar.gz asclepius/
scp ./asclepius.tar.gz ubuntu@101.35.79.162:/home/ubuntu/
ssh ubuntu@101.35.79.162 "sudo rm -rf /www/wwwroot/asclepius;sudo tar -zxf asclepius.tar.gz -C /www/wwwroot/;sudo /www/server/nginx/sbin/nginx -s reload"