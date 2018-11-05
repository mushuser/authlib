var g_access_token = undefined;

function g_get_accesstoken() {
  if(g_access_token) {
    return g_access_token  
  }
  
  var url = "https://www.googleapis.com/oauth2/v4/token"

  var payload = {
    "client_id":secret.audiolib_creds.client_id,
    "client_secret":secret.audiolib_creds.client_secret,
    "refresh_token":secret.audiolib_creds.refresh_token,
    "grant_type": "refresh_token"
  }
  
  var options = {
    "payload":payload  
  }

  var r = httplib.httpretry(url, options)
  var j = JSON.parse(r)

  return j.access_token
}