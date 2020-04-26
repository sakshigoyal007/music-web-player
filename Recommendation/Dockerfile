FROM java:8-jre
WORKDIR usr/src
EXPOSE 9998
ADD ./target/Recommendation-0.0.1-SNAPSHOT.jar /usr/src/Recommendation-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Recommendation-0.0.1-SNAPSHOT.jar"]