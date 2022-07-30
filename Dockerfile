FROM tomcat:8.0-alpine
ADD /dist/casino /usr/local/tomcat/webapps/casino
EXPOSE 8080
CMD ["catalina.sh", "run"]
