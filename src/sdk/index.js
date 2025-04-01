export const BASE_URL = "http://localhost:8000/api/";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const get = async (url) => {
  const fullUrl = BASE_URL + url;
  const response = await fetch(fullUrl, {
    headers: {
      ...getAuthHeader(),
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      throw new Error("Unauthorized");
    }
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
      ...getAuthHeader(),
    },
  }

  const response = await fetch(fullUrl, data);
  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to post data");
  }

  return await response.json();
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};
