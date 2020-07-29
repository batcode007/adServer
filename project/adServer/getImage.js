//The image is stored at S3. For now, we are hitting the direct url, but should use cloudfront to map the url
const imageURL = 'https://ng-test-images.s3.amazonaws.com/bug.jpeg';

exports.handler = async (event) => {

  let divId = event.queryStringParameters && event.queryStringParameters.divId;
  if(!divId){
    console.log('divisionId not received');
  }

  //JS snippet to create a new img element in HTML and append the image in the given div block
  let returnVal = `const div = document.getElementById(${divId});
    const imageElement = document.createElement('img')
    imageElement.src = '${imageURL}';
    div.appendChild(imageElement);`;

    const response = {
      headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers" : "*",
          "Access-Control-Allow-Methods": "*"
      },
      statusCode: 200,
      body: JSON.stringify(returnVal)
  };
  return response;
};
