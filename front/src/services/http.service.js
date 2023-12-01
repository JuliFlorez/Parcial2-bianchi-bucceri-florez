export async function call({uri, method = "GET", body = undefined}) {
  return fetch(`http://localhost:2023/api/${uri}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  }).then( async (response) => {
    if (!response.ok || response.status === 401) {
      localStorage.removeItem("token");
      throw await response.json()
    }
    return response.json();
  });
}

export async function post({ uri, data }) {
  return call({ uri, method: "POST", body: data });
}

export async function put({ uri, data }) {
  return call({ uri, method: "PUT", body: data });
}

export async function remove({ uri }) {
  return call({ uri, method: "DELETE" });
}

export default{
    call,
    post,
    put,
    remove,    
}
