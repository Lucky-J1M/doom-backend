module.exports = {
    oasFile: "api/oas.yaml",
    middleware: {
        security: {
            disable: false,
            auth: {
                BasicAuth: (token) => {/* Validate encoded token*/ },
                BearerAuth: (token) => {/* Validate token */ },
                ApikeyAuth: (token) => {/* Validate the token */ },
                OAuth2: (secDef, secScope) => { /* OAuth authentication */ },
                OpenID: (secDef, secScope) => { /* OAuth authentication */ }
            }
        }
    }
}
