Things to Note:

1)The UI code is present in "FrontEnd" folder
2)The WebAPIService code is present in "BackEnd" folder
3)Steps to test UI and Service:
4)First open the StarWarsAPI solution present inside "BackEnd" folder in visual studio 2015 IDE and build it.
5)All the necessary nuget packages will be installed from Nuget.org and build should be succeeded.
6)The service will be running in local machine at url: http://localhost:57048/
7)Now open the UI code using visual studio code IDE and run the below commands:
     npm install (All the necessary packages should be installed)
     npm start (start the server)
8)If the service is running in different port (refer step 6) then update the urls with necessary port in the below files.
	in UI code go to "App.js". Here you can find the urls, please update as per your port and machine name.

9) The StarWars UI application should run now (Keep StarWarsAPI running. Do not stop).
    Now click on button visible on the screen.
	The required data is fetched from StarWarsAPI(Backend) and displayed on the UI screen.

10) The logging for WebAPI service has been done using log4net nuget package. For any information and errors, "StarWars.txt" file is generated under "StarWarsWebAPI" project.




