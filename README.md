Concurrent (Video Stream) Restriction Service
=

This service counts and restricts the number of concurrent video streams being watched by a user.

Clients must provide unique identifiers for the video streams. This means the service can support multiple requests for the same stream (i.e. doesn't count the same stream more than once).