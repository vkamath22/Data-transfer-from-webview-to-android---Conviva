Status : Development

# Data-transfer-from-webview-to-android---Conviva
This projects demonstrates how you can send data from a Webview to an Android app using the Javascript Interface.

Contents of this project :
1. Sample web project.
2. Sample Android Project.


Sample Web project.  
This project contains a sample OTT application with 2 player - VideoJS and Bitmovin. Conviva analytics have been integrated with both of them. 

Project Architecture :  
Every player has its own page (videojs.html & bitmovin.html) and is connected to an Interface - js/convivaAnalytics.js. The Player events trigger specific conviva api's.

Sample Android Project :  
The android project show how an event can be read from a webpage. This project makes use of the Javascript Interface api to read events from the WebView. 
Please refer : https://developer.android.com/guide/webapps/webview for more information. 
For this project we just trigger normal toast's messages after listening the event fired. 
Once an Event occurs, the webpage calls : AndroidFunction.function("Event Name"); which is then read by the android application to trigger the toast.

Things to make a note of :  
1. This application will only work on Android Webview. 
2. If you intend to run this application for both websites and android application please put proper check while writing the interface as it will throw an error saying function not found.
3. This is not a production ready code and may be subject to changes or optmisations without notifing you.
4. Do not copy paste or use this code for your own application. 
5. Please not "AndroidFunction" is the function name for the interface written in the android app. These have to be the same.
6. Please make sure both projects run on same network.
7. Please change the source url for the webview in the android app to the IP address of the local machine. 
8. Good time.
