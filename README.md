Concurrent (Video Stream) Restriction Service
=

[![Build Status](https://travis-ci.org/grahamdyson/concurrent-restriction-service.svg?branch=master)](https://travis-ci.org/grahamdyson/concurrent-restriction-service)

This service counts and restricts the number of concurrent video streams being watched by a user.

Clients must provide unique identifiers for the video streams. This means multiple request can be made for the same stream, but will only be counted as one towards the maximum.
