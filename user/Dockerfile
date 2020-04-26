FROM java:8-jre
WORKDIR usr/src
EXPOSE 8080
ADD ./target/user-0.0.1-SNAPSHOT.jar /usr/src/user-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","user-0.0.1-SNAPSHOT.jar"]