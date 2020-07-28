exports.handler = async (event) => {
  console.log(event);
  
  //user authorisation, if needed

  //extract divId from the query parameter
  const divId = event.queryStringParameters && event.queryStringParameters.divId;
  if(!divId){
    //throw an error
    throw new Error("Div id not received");
    //divId = "test";
    //console.log('divisionId not received');
  }

  //api url of second api, from where we will get the image
  const fetchImageApi = `https://rvwfo4bv9b.execute-api.us-east-1.amazonaws.com/getImage?divId=${divId}`;

  //JS snippet that will be returned and will make a new call to another API
  const result = `fetch(${fetchImageApi})
      .then(response => response.json())
      .then(data => (function(){console.log(data)})()
      )`;

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};
