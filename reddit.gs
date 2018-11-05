function r_get_accesstoken(basic_auth, refresh_token) {
  var url = "https://www.reddit.com/api/v1/access_token"
  
  var headers = {
    "Authorization":basic_auth
  }
  
  var payload = {
    "grant_type":"refresh_token",
    "refresh_token":refresh_token,    
  }
  
  var options = {
    "headers":headers,
    "method":"post",
    "payload":payload
  }
  
  var response = httplib.httpretry(url, options)
  
  var text = response.getContentText()
  var json = JSON.parse(text)
  var access_token = json.access_token
  
  return access_token
}

//
function r_get_bearer(creds) {
  if(creds == undefined) {
    creds = credential
  }
  
  if((creds.username == credential.username) && (ACCESS_TOKEN != undefined)) {
    return get_bearerauth(ACCESS_TOKEN)
  }
  
  var basic_auth = get_basicauth(
    creds.client_id, 
    creds.secret)

  var access_token = r_get_accesstoken(
    basic_auth,
    creds.refresh_token
  )
 
  return r_get_bearerauth(access_token)
}