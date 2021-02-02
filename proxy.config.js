module.exports={
  "/api/*": {
    "target": "http://localhost:8000",
    "pathRewrite": {
      "^/api": ""
    },
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
