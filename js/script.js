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
