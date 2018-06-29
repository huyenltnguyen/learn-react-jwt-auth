# learn-react-jwt-auth

An attempt to hook up client-side React app to server-side authentication API.

## Authentication flows
| When a user is | Do | Then |
|---|---|---|
| Signing up | Verify email is not in use | Send an access token |
| Signing in | Verify email & password (by using local Passport strategy) | Send an access token |
| Trying to access a protected route | Verify access token (by using JWT Passport strategy) | Give access |

## Steps
### Sign Up
- Send a post request to the server with an email address and a password.
- Receive an access token and a status message in the returned JSON response.
- Save the token to sessionStorage (or localStorage).
- Change the loggedIn state to `true` (in order to render UI accordingly).
- Redirect to home page.

### Sign In
- Send a post request to the server with an email address and a password.
- Receive an access token and a status message in the returned JSON response.
- Save the token to sessionStorage (or localStorage).
- Change the loggedIn state to `true`.
- Redirect to home page.

### Protected Routes
- Send a post request to the server with the access token for validation.
- Allow access if the access token is valid && user's loggedIn state is `true` (to prevent the case in which user is logged out but the token is still valid). 

### Sign Out
- Take user to home page.
- Remove the access token from sessionStorage.
- Set loggedIn state to `false`.
