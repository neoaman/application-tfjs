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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchCollection = async (param) => {

  var csrftoken = getCookie("csrftoken");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken 
    },
    body: JSON.stringify(param),
    //   Param can be a object with keys 
    //   use: "prod",
    //   query: {},
    //   projection: { _id: 0 },
    //   limit: 0,
    //   skip: 0,
    //   sort: [] a blank list,
  };
  var data = [];
  var error = null;
  const res = await fetch(
    `/api/mongolist/`,
    requestOptions
  )
    .then(handleErrors)
    .then((res) => res.json())
    .then((d) => {
      data = d;
    })
    .catch((err) => {
      error = err;
    });
  //   console.log(data);
  console.log(error != null ? error : "Status Ok");
  return data;
};

export const getDocument = async (use,pk) => {
  var data = [{}],
    error = false;
  const response = await fetch(
    `/api/mongoupdate/${use}/${pk}/`
  )
    .then((respo) => respo.json())
    .then((obj) => {
      data = obj;
    })
    .catch((err) => {
      error = err;
    });
  // console.log(data)
  console.log(error && error);
  return data[0];
};

export const putObject = async (use, file, name, location) => {
  var csrftoken = getCookie("csrftoken");
  var url = "https://",
    error = null;
  var myHeaders = new Headers();
  // myHeaders.append("Authorization", `Token ${token}`);
  myHeaders.append("X-CSRFToken", csrftoken);
  var formdata = new FormData();
  formdata.append("use", use);
  formdata.append("file", file, file["name"]);
  formdata.append("name", name);
  formdata.append("location", location);
  const requestOptions = {
    method: "PUT",
    body: formdata,
    headers: myHeaders,
    redirect: "follow",
  };
  const res = await fetch(`/api/upload/`, requestOptions)
    .then(handleErrors)
    .then((response) => response.json())
    .then((result) => {
      url = result["url"];
    })
    .catch((err) => (error = err));
  console.log(url);
  console.log(error != null && error);
  return url;
};

export const postDocument = async (collection,pk, doc) => {
  var csrftoken = getCookie("csrftoken");
  var response = null,
    error = null;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken 
    },
    body: JSON.stringify({
      operation: "set",
      document: doc,
    }),
  };
  const data = await fetch(
    `/api/mongoupdate/${collection}/${pk}/`,
    requestOptions
  )
    .then(handleErrors)
    .then((respo) => (response = respo.json()))
    .catch((err) => (error = err));

  console.log(response != null && response);
  console.log(error != null && error);

  return response;
};
