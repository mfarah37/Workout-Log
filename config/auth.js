//Middleware for routes that require Log In
module.exports = function isLoggedIn(req, res, next) {
    if( req.isAuthenticated() ) return next()
    //Redirect to login if user isn't logged in
    res.redirect('auth/google')
}