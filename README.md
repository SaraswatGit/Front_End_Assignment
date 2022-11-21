## Techstack :

1. Angular 
2. CSS framework - Tailwind

## Description of the Project

The Application is made up of 7 components .

* app-single-repo: This component displays a single repository with its name , description and topics associated with it .
* AppComponent : The is the top-most component of which all compnents are children .
* FrontSearchingComponent : This component is responible for taking username as an input from the user.
* PersonRepositoriesComponent : This components contains all the repositories of an user.
* PersonDetailsComponent : This component contains all the details of a user .
* LoadingComponent : A circular loader is diplayed when the user details or the repositories are being fetched .
* ErrorComponent : Displays on a error message , for eg : "User not found " etc .

# Working of the Project

> The FrontSearchingComponent communicates with the parent component i.e. AppComponent whenever a new username is typed in using a **EventEmitter** .
> The user details and repositories are fetched using the Github api whenever a new username is passed from the parent compnent . When the user uses pagination to view more repositories , the repos are fetch by passing the page number , maximum number of repos per page values in the api to get desired repos .

```
      `${this.BASE_URL}/search/repositories?q=${encodedQuery}&page=${page}&per_page=${max}`,

```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
