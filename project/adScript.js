/*
Pasting this script into the web console should do the needful.
 */

/*
  Make a GET request at the api and pass the HTML div id as queryStringParameter.
  It will send a request to the server and fetch a javascript snippet, which will make another API call
 */

const divToAppendImage = "childDiv";
const getJSURL = `https://rvwfo4bv9b.execute-api.us-east-1.amazonaws.com/render/getJS?divId=${divToAppendImage}`;

fetch(getJSURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // return (()=>data)();
    // let t = eval(data);
    // return t.then(res=>console.log('re',eval(res)));
    return eval(data);
  });