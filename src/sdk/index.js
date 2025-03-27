export const BASE_URL = "http://localhost:8000/api/";

export const get = async (url) => {
  const fullUrl = BASE_URL + url;
  const response = await fetch(fullUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

export const post = async (url, body) => {
  const fullUrl = BASE_URL + url;
  const data = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }

  const response = await fetch(fullUrl, data);
  if (!response.ok) {
    throw new Error("Failed to post data");
  }

  return await response.json();
}
