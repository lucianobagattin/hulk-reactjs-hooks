import jwt from 'jsonwebtoken'

export function configureFakeBackend() {
   let users = [
      { 
         id: 1, 
         username: 'hulktestuser@hulk.com', 
         password: '12345678'
      }
   ];
   const jwtConfig = {
      "secret": "dd5f3089-40c3-403d-af14-d0c228b05cb4",
      "accessExpireTime": Date.now() + 900000, // 15 mintue
      "refreshExpireTime": Date.now() + 3600000 // 1 hour
	}
	
	let currentLoggedinUser = []

   let realFetch = window.fetch;
   window.fetch = function (url, opts) {
      return new Promise((resolve, reject) => {
         // wrap in timeout to simulate server api call
         setTimeout(() => {
				// authenticate
				if (url.endsWith('/users/signup') && opts.method === 'POST') {
					currentLoggedinUser = []
					// get parameters from post request
					let params = JSON.parse(opts.body);
					users.push({
						id: 35,
						username: params.username,
						password: params.password
					})
					// find if any user matches login credentials
					let filteredUsers = users.filter(user => {
						return user.username === params.username && user.password === params.password;
					});

					if (filteredUsers.length) {
						
						let user = filteredUsers[0];
						let responseJson = {
								id: 35,
								username: user.username,
								access_token: jwt.sign({id: 35}, jwtConfig.secret, {expiresIn: jwtConfig.accessExpireTime}),
								refresh_token: jwt.sign({id: 35}, jwtConfig.secret, {expiresIn: jwtConfig.refreshExpireTime}),
								access_tokenExpiryTime: jwtConfig.accessExpireTime,
								refresh_tokenExpiryTime: jwtConfig.refreshExpireTime                            
						};
						currentLoggedinUser.push(responseJson);
						
						resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
					} else {
						// else return error
						reject('Username or password is incorrect');
					}

					return;
				}
				
				if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
					// get parameters from post request
					currentLoggedinUser = []
					let params = JSON.parse(opts.body);

					// find if any user matches login credentials
					let filteredUsers = users.filter(user => {
						return user.username === params.username && user.password === params.password;
					});

					if (filteredUsers.length) {
						
						let user = filteredUsers[0];
						let responseJson = {
								id: user.id,
								username: user.username,
								access_token: jwt.sign({id: user.id}, jwtConfig.secret, {expiresIn: jwtConfig.accessExpireTime}),
								refresh_token: jwt.sign({id: user.id}, jwtConfig.secret, {expiresIn: jwtConfig.refreshExpireTime}),
								access_tokenExpiryTime: jwtConfig.accessExpireTime,
								refresh_tokenExpiryTime: jwtConfig.refreshExpireTime                            
						};
						currentLoggedinUser.push(responseJson);

						resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
					} else {
						// else return error
						reject('Username or password is incorrect');
					}

					return;
				}
				
				if (url.endsWith('/users/refreshToken') && opts.method === 'POST') {

					let user = currentLoggedinUser[0];
					
					if (currentLoggedinUser.length) {
						let responseJson = {
							id: 35,
							username: user.username,
							access_token: jwt.sign({ id: 35 }, jwtConfig.secret, { expiresIn: jwtConfig.accessExpireTime }),
							refresh_token: jwt.sign({ id: 35 }, jwtConfig.secret, { expiresIn: jwtConfig.refreshExpireTime }),
							access_tokenExpiryTime: jwtConfig.accessExpireTime,
							refresh_tokenExpiryTime: jwtConfig.refreshExpireTime
						};
						resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
					} else {
						// else return error
						reject('error: access token is not refreseh');
					}  
					return;
				}
				// get users
				if (url.endsWith('/users') && opts.method === 'GET') {
					// check for fake auth token in header and return users if valid, this security is implemented server side in a real application
					if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
						resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
					} else {
						// return 401 not authorised if token is null or invalid
						reject('Unauthorised');
					}
					return;
				}

				// pass through any requests not handled above
				realFetch(url, opts).then(response => resolve(response));

         }, 500);
      });
   }
}