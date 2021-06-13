function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const getToken = async (id,pass) => {
  var csrftoken = getCookie("csrftoken");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    body: JSON.stringify({
      username: id,
      password: pass,
      // password: process.env.REACT_APP_ACCESS_PASSWORD,
    }),
  };
  const data = await fetch(
    `/api/api-token-auth/`,
    requestOptions
  )
    .then((respo) => respo.json())
    .then((data) => data);

  // console.log(data);
  return data["token"];
};

export const get_user = async (params) => {
  var csrftoken = getCookie("csrftoken");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    body: JSON.stringify({}),
  };
  const data = await fetch(
    `/api/user-info/`,
    requestOptions
  )
    .then((respo) => respo.json())
    .then((data) => data);
  // console.log(data)
  return data
}