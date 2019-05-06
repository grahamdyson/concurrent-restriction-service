Concurrent (Video Stream) Restriction Service
=

[![Build Status](https://travis-ci.org/grahamdyson/concurrent-restriction-service.svg?branch=master)](https://travis-ci.org/grahamdyson/concurrent-restriction-service)

This service counts and restricts the number of concurrent video streams being watched by a user.

The API is made available over HTTP using [AWS Lambda](https://aws.amazon.com/lambda/) / [Serverless](https://serverless.com/). To test, install and setup credentials for Serverless, and deploy ([instructions](https://serverless.com/framework/docs/providers/aws/guide/)).

Clients must provide unique identifiers for the video streams. This means multiple request can be made for the same stream, but will only be counted as one towards the maximum.

Counting and restriction is performed using a single HTTP request with the POST method/verb. The response will have a 403 status code if the request would exceeded the maximum count for that user. The requesting client can then restrict (e.g. block the video stream) based on the response status code.

When a video is no longer being streamed the client can use the DELETE method/verb to reduce the count and potentially avoid other streams being restricted.

```
/streams/{identifier}
```