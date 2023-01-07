# gpt3-wishes
How to write personalized New Year wishes for a list of friends and family on Google Sheets, using Google Apps Script, the Open.AI GPT-3 API, and the Google Translate API.

Start a new Google Sheet. Under 'Extensions' click 'Apps Script'. In the code window, enter the content of the code.js file here. Please note that you will need an OpenAI API account and a Secret Key to run this code. See in-line documentation on how to get your secret key.

Bravo, you have now a new function "prompt" in Sheet. To try it, have (for example) in A1 a prompt (e.g. write a thank you note for my friend Bob who I know from high school and love chocolate in less than 40 words), in B1 a two letter code for a language (e.g. FR), then in C1 the function =prompt(A1,B1)


Have fun!
