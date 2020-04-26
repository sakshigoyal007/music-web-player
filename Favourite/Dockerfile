FROM java:8-jre
WORKDIR usr/src
EXPOSE 9997
ADD ./target/Favourite-0.0.1-SNAPSHOT.jar /usr/src/Favourite-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Favourite-0.0.1-SNAPSHOT.jar"]