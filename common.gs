//
function get_basicauth(client_id, client_secret) {
  return "Basic " + Utilities.base64Encode(client_id + ':' + client_secret)
}

//
function get_bearerauth(access_token) {
  return "Bearer " + access_token
}

