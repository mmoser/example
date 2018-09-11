# example
An example of an Angular/Redux application with dotnet core/EF.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

```
dotnet core
SQL Server
NodeJS
Angular CLI
```

### Installing

A step by step series of examples that tell you how to get a development env running

Download the code either using a zip or with git

```
git clone https://github.com/mmoser/example.git <root directory>
```

#### Install all npm dependencies

Change the directory to the root directory where you cloned it to

```
cd <root directory> // From above
```

Change the directory to the web project called benefits
```
cd benefits
```

Install dependencies using npm
```
npm install
```

#### Creating the database and the user

Either open Sql Server and create a database using the GUI or with the script below. Mine was called `Benefits`, but you can name it whatever you want.

```
CREATE DATABASE BENEFITS
```

Alternatively you can create a database with the command below using the [SqlCmd](https://docs.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms165702(v=sql.105)) utility.  Note, the "." below is representing my database server. You might also need to pass your username and password credentials using the -U and -P parameters respectively. 

```
sqlcmd -S . -Q "CREATE DATABASE BENEFITS"
```

Create a user to use and associate them as the db_owner within the database. The user name in the script below is `benefits_user` and the password is `xxx`, but you will probably want to change the password at least.

```
USE [master]
GO
CREATE LOGIN [benefits_user] WITH PASSWORD=N'xxx', DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
USE [BENEFITS]
GO
CREATE USER [benefits_user] FOR LOGIN [benefits_user]
GO
USE [BENEFITS]
GO
EXEC sp_addrolemember N'db_owner', N'benefits_user'
GO
```

#### Run migrations

Change the directory back to the root

```
cd <root directory>
```

Change the directory to the API

```
cd Core.Api
```

Set the connection string in the `appsettings.json` to the user/password from above along with the database server and database.

```
	"ConnectionStrings": {
		"BenefitsConnection": "Server=.;Database=Benefits;Trusted_Connection=True;User Id=benefits_user;Password=xxx"
	}
```

Open the NuGet Package Manager and run the following command.

```
Update-Database
```

You should now have tables and data in the `Benefits` database.

### Running the site

Open a terminal and change directory to the web site. Run the site using Angular CLI.

```
cd <root directory>\benefits
ng run
```

Open another terminal and change directory to the API. Run the API using dotnet core CLI.

```
cd <root directory>\Core.API
dotnet run
```

Note: The API is set to run on port `54763`. If this port is being used by another process, then you will want to set the port in the `launchSettings.json` to a port of your choosing and also set it in the `environment.ts` file on the website.

`<root directory>\Core.API\Properties\launchSettings.json`
```
 "applicationUrl": "http://localhost:54763/"
```

`<root directory>\benefits\environment\environment.ts`
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:54763/api/'
};
```

## Running the front end tests

For the front end tests, please change the directory to the `root directory` and then to the web site. Then run the tests using Angular CLI.

```
cd <root directory>\benefits
ng test
```

## Running the back end tests

Note: Right now there are only tests around the Services Project. 

First build the solution

```
dotnet build <root directory>\Benefits.sln
```

Run the tests
```
dotnet test <root directory>\Core.Services.Tests\Core.Services.Tests.csproj
```










