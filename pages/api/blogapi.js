const URL = "https://mashriq.herokuapp.com/dash/v1/";
export const login = (data, callback) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }) //if error in request not in data
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
