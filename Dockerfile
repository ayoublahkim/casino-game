FROM tomcat:8.0-alpine
ADD /dist/cofeed /usr/local/tomcat/webapps/cofeed
EXPOSE 8080
CMD ["catalina.sh", "run"]
