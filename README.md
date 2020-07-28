# adServer

This repo contains an adServer folder and an adScript file.
This is used to append an image dynamically to an existing div element on the page.

Script calls a GET api on the server.
The api returns a JS snippet, which has a new api call embedded in it.
On succesfull response, the new get api (get image) is fired. The api returns another JS snippet which appends the image in the given div element.


To run :
1. Open the adScript.js file and replace the divId with the one where you want the image to be inserted.
2. Paste and run the script present in the adScript.js file on any web-browser.
3. An image would be appended in the div id passed. 

The api's are hosted on aws api gateway and aws lambda; and the image is stored on aws s3.
