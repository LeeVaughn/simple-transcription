/**
 * Transcribes audio file
 * 
 * @param {string} url - the URL to use in the POST request
 * @param {object} data - init object
 * @return {object} response data in the form of a JSON object
 */
async function transcribeFile(url="", data= {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      authorization: apiKey,
      "content-type": "application/json",
      "Transfer-Encoding": "chunked" 
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

/**
 * Get completed audio transcription
 * 
 * @param {string} url - the URL to use in the POST request
 * @param {object} data - init object
 * @return {object} response data in the form of a JSON object
 */
async function getTranscription(url="") {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      authorization: apiKey,
      "content-type": "application/json"
    }
  });
  return response.json();
}

/**
 * Displays error message
 * 
 * @param {string} msg - error message to display
 */
 function displayError(msg) {
  const errorMessage = `<p class="error">${msg}</p>`;

  document.querySelector("main").innerHTML = errorMessage;
}

/**
 * Displays transcription results
 * 
 * @param {string} text - transcribed text from the audio file
 */
 function displayResults(text) {
  console.log(text)
}

getTranscription("https://api.assemblyai.com/v2/transcript/fi0wyq92h-d790-43dc-8385-01bfac11031f")
.then(data => {
  if (data.status === "processing") {
    displayError("The data is still processing. Please try again in a moment.");
  } else {
    transcribedText = data.text;
    displayResults(transcribedText);
  }
})
.catch((err) => console.error(err));


