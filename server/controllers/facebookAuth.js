const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
    new FacebookStrategy(
        {  // object with info
            clientID:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_SECRET_KEY,
            callbackURL:process.env.FACEBOOK_CALLBACK_URL
        },

        

        async function (accessToken)

    )
)