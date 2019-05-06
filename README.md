Concurrent (Video Stream) Restriction Service
=

[![Build Status](https://travis-ci.org/grahamdyson/concurrent-restriction-service.svg?branch=master)](https://travis-ci.org/grahamdyson/concurrent-restriction-service)

This service counts and restricts the number of concurrent video streams being watched by a user.

The API is made available over HTTP using [AWS Lambda](https://aws.amazon.com/lambda/) / [Serverless](https://serverless.com/). To test, install and setup credentials for Serverless, and deploy ([instructions](https://serverless.com/framework/docs/providers/aws/guide/)).

Clients must provide unique identifiers for the video streams. This means multiple request can be made for the same user and stream, but each stream only be counted as one towards the users maximum.

Only the following URI is available and requests to it must include the stream identifier.

```
/streams/{stream identifier}
```

Counting and restriction is performed using a single HTTP request with the POST method/verb. The response will have a 403 status code if the request would exceeded the maximum count for that user. The requesting client can then restrict (e.g. block the video stream) based on the response status code.

When a stream is no longer being watched the client must use the DELETE method/verb to reduce the count and potentially avoid other streams being unnecessarily restricted.