# MyLoL

MyLoL is a personal project to practice PrimeNG & Angular using the API of one of my favorite games: League of Legends

This project was generated with [Angular CLI] (https://github.com/angular/angular-cli) version 12.2.0.


## Downloading the project

Clone the project within the desired local folder: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository 

Next steps assume you are using git bash (or similar tool) and within the project's folder.


## Installing needed packages

Run `npm install` for download and install all needed packages from npm repository


## Avoiding CORS

RIOT api follow CORS policies and due to this project is an only front-end app and is not possible hide the secret api key (a backend is needed or a proxy)
https://riot-api-libraries.readthedocs.io/en/latest/mobile.html

We can bypass this restriction in local deployments:
- Install CORS chrome plugin https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es
- turn it on: 
- 
     ![image](https://user-images.githubusercontent.com/62815133/140618669-8bdd82f1-cc6f-4d9a-9bf9-f6960e268abd.png)
  

## Development server

Run `ng serve -o` for a dev server.


## Future updates

- Use AWS lamba to fix CORS issue
- Pop up to catch dynamycally the desired summoner name
