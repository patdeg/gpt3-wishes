// The core of this code is taken from https://github.com/garethdmm/SpreadsheetMagic, but adjusted and fixed as it didn't work for me when I tried it first.

// Get your OpenAI API Key from https://beta.openai.com/account/api-keys
// Then click on "create new secret key"
// Copy & Paste the key (starting with "sk-") below
var API_KEY = "[your API Key from OpenAI]";

// Maximum number of tokens (words) to return (and pay for)
var NUM_TOKENS = 1024;

// Temperature (volalitity, creativity) for the request. 
// A temperature of 0.0 will always return the same content. 
// A temperature of 1.0 will maximize the creativity and rerturn very different results at each call. 
// A temperature of 0.7 is often a good compromise.
var TEMPERATURE = 0.7;

// Function to do the API call
function _callAPI(prompt) {
  var data = {
    'prompt': prompt,
    'max_tokens': NUM_TOKENS,
    'temperature': TEMPERATURE,
    'model': 'text-davinci-003',
  };

  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(data),
    'headers': {
      Authorization: 'Bearer ' + API_KEY,
    },
  };

  response = UrlFetchApp.fetch(
    'https://api.openai.com/v1/completions',
    options,
  );

  return JSON.parse(response.getContentText())['choices'][0]['text']
}

// Google Sheet function to return a GPT3 suggestion from a prompt 'x' in language 'lang'
function prompt(x,lang) {
  var response = _callAPI(x);
  if (lang == "EN") {
      return response;
  }
  return LanguageApp.translate(response, 'en', lang);
}

