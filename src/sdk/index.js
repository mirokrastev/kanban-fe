export const BASE_URL = "http://localhost:8000/api/";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const checkAuth = (response) => {
  // Handle unauthorized access
  if (!response.ok && response.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

export const get = async (url) => {
  const fullUrl = BASE_URL + url;
  const response = await fetch(fullUrl, {
    headers: {
      ...getAuthHeader(),
    },
  });

  checkAuth(response);

  return response;
};

export const post = async (url, body) => {
  const fullUrl = BASE_URL + url;
  const data = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
  };
  const response = await fetch(fullUrl, data);

  checkAuth(response);

  return response;
};

export const deleteRequest = async (url) => {
  const fullUrl = BASE_URL + url;
  const response = await fetch(fullUrl, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });

  checkAuth(response);

  return response;
};

export const put = async (url, body) => {
  const fullUrl = BASE_URL + url;
  const data = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
  };

  const response = await fetch(fullUrl, data);

  checkAuth(response);

  return response;
};
