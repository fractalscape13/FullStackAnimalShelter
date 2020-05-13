# _Animal Shelter Full Stack Adventure_

#### _An inventory system for animals in the animal shelter using a React front-end and a C#/.NET API with MySQL_

#### By: **Joseph Wangemann, Alex Skreen** 
_May 12/13, 2020_

## Description

_The front-end of this application allows a user to see the list of all animals in the database, as well as add, edit, or delete animals from the database.  The API has GET/POST routes for creating a user and an associated authentication token, but authentication is not set up with the front-end yet._

## User Interface
![UI](./public/screenshot.png?raw=true "Screen shot")


## API Specifications / User Stories: 
### (Specs that mention authentication do not actually require authentication at this stage)
* A user is able to GET all animals in the shelter.
* A user is able to GET an individual animal listing.
* A user is able to POST a new user (username and password fields required).
* A user is able to POST using username/password to receive token
* A user is able to receive a JSON web token (expires 1 day after issuance) by sending a valid username and password in a POST request to 'api/users/authenticate'. Web tokens are needed to authenticate user requests to POST/PUT/DELETE animal listings. No authenication needed for GET requests for animals.  Token is needed for user GET request.  As is, the project seeds the database with one user (username: joe, password: password) and four animals.
* A user is able to POST a new animal listing using bearer token authentication.
* A user is able to PUT (edit) an individual animal listing using bearer token authentication.
* A user is able to DELETE an individual animal listing using bearer token authentication.
* A user is able to GET the full list of users using bearer token authentication.
* A user is able to view Swagger UI by navigating to http://localhost:5004/swagger/index.html

## API Endpoints Documentation
* Route: api/users | Method: POST | No authentication token needed, creates new user 
* Route: api/users/authenticate | Method: POST | Creates new authentication token for user using username and password from user object
* Route: api/users | Method: GET | Authentication token needed, shows full list of users
* Route: api/users | Method: GET | Authentication token needed, shows full list of users
* Route: api/animals | Method: GET | Shows full list of animals in database
* Route: api/animals/id | Method: GET | Shows individual animal by id property
* Route: api/animals | Method: POST | Authentication token needed, adds an animal to database
* Route: api/animals/id | Method: POST | Authentication token neederd, edits an existing animal in database
* Route: api/animals/id | Method: DELETE | Authentication token needed, deletes an individual animal in database


## Setup/Installation Requirements

_Setup assumes use of Git version control_

_This project contains a front-end application (frontend) and a back-end (AnimalApi).  You will need to run both projects on separate ports for the application to function._

### Install .NET Core

#### on macOS:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) to download a .NET Core SDK from Microsoft Corp._
* _Open the file (this will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.)_

#### on Windows:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer) to download the 64-bit .NET Core SDK from Microsoft Corp._
* _Open the .exe file and follow the steps provided by the installer for your OS._

#### Install dotnet script
_Enter the command ``dotnet tool install -g dotnet-script`` in Terminal (macOS) or PowerShell (Windows)._

### Install MySQL

#### on macOS:
_Download the MySQL Community Server DMG File [here](https://dev.mysql.com/downloads/file/?id=484914). Follow along with the installer until you reach the configuration page. Once you've reached Configuration, set the following options (or user default if not specified):_
* use legacy password encryption
* set password (and change the password field in appsettings.json file of this repository to match your password)
* click finish
* open Terminal and enter the command ``echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile`` if using Git Bash.
* Verify MySQL installation by opening Terminal and entering the command ``mysql -uroot -p{your password here, omitted brackets}``. If you gain access to the MySQL command line, installation is complete. An error (e.g., -bash: mysql: command not found) indicates something went wrong.

#### on Windows:
_Download the MySQL Web Installer [here](https://dev.mysql.com/downloads/file/?id=484919) and follow along with the installer. Click "Yes" if prompted to update, and accept license terms._
* Choose Custom setup type
* When prompted to Select Products and Features, choose the following: MySQL Server (Will be under MySQL Servers) and MySQL Workbench (Will be under Applications)
* Select Next, then Execute. Wait for download and installation (can take a few minutes)
* Advance through Configuration as follows:
  - High Availability set to Standalone.
  - Defaults are OK under Type and Networking.
  - Authentication Method set to Use Legacy Authentication Method.
  - Set password to epicodus. You can use your own if you want but epicodus will be assumed in the lessons.
  - Unselect Configure MySQL Server as a Windows Service.
* Complete installation process

_Add the MySQL environment variable to the System PATH. Instructions for Windows 10:_
* Open the Control Panel and visit _System > Advanced System Settings > Environment Variables..._
* Select _PATH..._, click _Edit..._, then _Add_.
* Add the exact location of your MySQL installation and click _OK_. (This location is likely C:\Program Files\MySQL\MySQL Server 8.0\bin, but may differ depending on your specific installation.)
* Verify installation by opening Windows PowerShell and entering the command ``mysql -uroot -p{your password here, omitted brackets}``. It's working correctly if you gain access to the MySQL command line. Exit MySQL by entering the command ``exit``.

### Clone this repository

_Enter the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``cd desktop``
* ``git clone https://github.com/fractalscape13/FullStackAnimalShelter``
* ``cd FullStackAnimalShelter/AnimalApi``

_Confirm that you have navigated to the AnimalApi directory (e.g., by entering the command_ ``pwd`` _in Terminal)._

_Recreate the ``joseph_wangemann`` database using the following commands (in Terminal on macOS or PowerShell on Windows) at the root of the AnimalApi directory:_
* ``dotnet restore``
* ``dotnet build``
* ``dotnet ef database update``

_Run this application by entering the following command in Terminal (macOS) or PowerShell (Windows) at the root of the AnimalApi directory:_
* ``dotnet run`` or ``dotnet watch run``
* access the [Swagger UI](http://localhost:5004/swagger/index.html) for testing this API


_Open another terminal and navigate into the frontend directory ``cd frontend``_

_Install all dependencies ``npm install``_

_Run the front-end in a separate port ``npm start``_

_To view/edit the source code of this application, open the contents of the AnimalApi.Solution directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal at the root of the AnimalApi.Solution directory)._

## Technologies Used

* React 
* React-Router
* Redux / React-Redux
* Redux-Thunk
* C#
* .NET Core 2.2
* MySQL
* Entity Framework Core 2.2
* Swagger 3.0 documentation (swagger.json)
* NSwag
* JSON Web Token Authentication
* Git

## License

_MIT license_

&copy; 2020 - JW, AS