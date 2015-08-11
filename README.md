# About

A simple package that allows you to search Vimeo videos. You will need an API key (client_id) and secret from Vimeo.

# Usage (server side only)

First Authenticate...

```JavaScript
  VimeoApi.authenticate({
    CLIENT_ID: /* YOUR CLIENT ID */,
    CLIENT_SECRET: /* YOUR CLIENT SECRET */
  });
```
Then you can search.

```JavaScript
  /**
   * @param  {String} query [what you are searching for]
   * @param  {Object} args  [see https://developer.vimeo.com/api/playground/videos]
   * @return {Object}
   */
  var results = VimeoApi.videos(query, args)
```

# Next

1. Add specs,
2. Implement related videos

# Contribute

This is a working progress... feel free to submit a pull request and contribute

Aug 11, 2015 -- Added channelsVideos method in 'vimeo-video-search.js'
