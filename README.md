# MUSIX App: Building a Full Stack
## Problem Statement
This case study is about displaying all tracks/playlists from different countries. Also the details about each track/album has to be displayed.
Build a system to find and search music by artist/album and add specific music playlist to favourite and recommendations list.
The user should be able to remove favourites and recommendations as per his requirement.
Tech Stack must include Angular, Spring Boot, CI, MongoDB, Docker and MySQL.
## Requirements
The application needs to fetch playlist of different countries from the following API:
- https://api.spotify.com/

Refer the following URLs to explore more on the music playlist APIs:
- https://developer.spotify.com/documentation/web-api/
- https://developer.spotify.com/documentation/web-api/reference/playlists/
- https://developer.spotify.com/documentation/web-api/reference/albums/
- https://developer.spotify.com/documentation/web-api/reference/artists/

An Angular front-end where the user can register/login to the application, find music tracks from different countries and add interested music to favourite list and recommendations list.
The top tracks and countries tracks/playlist( under Countries section) can be displayed on the dashboard as a quick view to the user.
The details can be displayed for a selected music track/album.
User can add or remove a music from favourites and recommendation list and should be able to view the respective tracks. User can also view all the playlist recommendations from other users.
# Tech Stack
- Spring Boot
- Angular
- CI (Gitlab Runner)
- MongoDB, MySQL 
- Swagger UI
- Docker, Docker Compose
- Flow of Modules
## Modules
### User
- Java Spring boot application which runs on http://localhost:8080.
- Further details of the RESTful api can be referred on http://localhost:8080/swagger-ui.html
Includes Authentication Controllers.
### Musix - UI (User interface)
- Material Design inspired Dashboard view for all music playlist/tracks.
- Allows user to add specific music to his/her favorites.
- Responsive UI supporting most mobile and tablet views.
### Favourite( Spring REST )
- Java Spring Boot Application which runs on http://localhost:9997
- Further details of the RESTful api can be referred on http://localhost:9997/swagger-ui.html
### Recommendation( Spring REST )
- Java Spring Boot Application which runs on http://localhost:9998
- Further details of the RESTful api can be referred on http://localhost:9998/swagger-ui.html
# How to Run
You can run this project using Docker - Compose using the foloowing commands :
### Installing Docker-Compose
- Run this command to download the current stable release of Docker Compose:
```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
- Apply executable permissions to the binary:
```
sudo chmod +x /usr/local/bin/docker-compose
```
- Test the installation.
```
$ docker-compose --version
docker-compose version 1.25.4, build 1110ad01
```
### Run Application
- Run the following command on the root directory
```
$ sudo docker-compose up
```
- Access the application using http://localhost:4200/
