1. Init project and structure
2. Setup developer environment
3. Install express and nodemon
 - configure static middleware
 - configure body-parser middleware
 - config routes
4. Add images and css in public directory
5. Add html files in views directory
6. install express-handlebars
 - configure view engine
 - add main layout
 - fix public style hyperlinks 
 - render home page in hbs
7. Convert all html views to handlebars views
 - Group views by meaning
8. Add controller folder with home controller
9. Add database
 - install mongoose
 - connect to db
10. Prepare user functionality
 - user controller
 - add controller to routes
 - fix navigation in nav bar (login, register, logout)
 - render register page
 - render login page
11. Add user model
 - simple validation in schema
 - add method for register
 - create first user record in the db
 - validate if password mismatch
 - validate email already exists
12. Hash password
 - install bcrypt
 - hash password
13. Login
 - find user by id
 - validate password with hash
14. Generate jsonwebtoken
 - install jsonwebtoken
 - promisify jsonwebtoken
 - generate secret
 - generate token service login
15. Return token in cookie
 - install cookie-parser
 - configure cookie-parser
 - set cookie with the token
 