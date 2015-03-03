# Backend as a Service Product Evaluation

The purpose of this repository is to evaluate several Backend as a Service products for use in Singlestone's new Development Prototype solution offering.

## Backend as a Service (BaaS) Definition

BaaS is a model for providing web and mobile app developers with a way to link their applications to backend cloud storage and APIs exposed by back end applications while also providing features such as user management, push notifications, and integration with social networking services.[4] These services are provided via the use of custom software development kits (SDKs) and application programming interfaces (APIs).

Source: [Wikipedia](http://en.wikipedia.org/wiki/Mobile_Backend_as_a_service)

## Why BaaS for Prototype Development?

There are a couple of reasons why BaaS is a good fit for Prototype development:

1. **Saves time** - BaaS products will provide simple API's for storage, authentication, email, etc saving custom development time on the backend.
2. **Saves money** - See #1. Time is money.
3. **Front End Developer only** - Using a BaaS, a reasonably complex application can be completely built by an experienced Front End Developer. This is important because we will be trying to keep project costs down by staffing the project with a single developer. If that developer did not need to know a traditional server side language (.Net, Java, Ruby, etc..) your typical FED could perform the role.

## BaaS Products to Evaluate

### Commercial
* [AnyPresence](http://www.anypresence.com/)
* [Back&](https://www.backand.com/)
* [Backendless](http://backendless.com/)
* [built.io](https://www.built.io/)
* [Firebase](https://www.firebase.com/)
* [Kii](http://en.kii.com/)
* [Kinvey](http://www.kinvey.com/)
* [Parse](https://parse.com/)


### Open Source
* [Baas Box](http://www.baasbox.com/)
* [deployd](http://deployd.com/)
* [Dream Factory](https://www.dreamfactory.com/)
* [Hoodie](http://hood.ie/)
* [remoteStorage](http://remotestorage.io/)
* [Usergrid](http://usergrid.incubator.apache.org/)

## Comparison Matrix

Feature | deployd | BaasBox | Hoodie
--------|---------|---------|--------
Persistence | Yes (MongoDB) | Yes (OrientDB) | Yes (CouchDB)
Custom Endpoints | Yes | Yes | Via Plugin
Custom Validation | Yes | No | No
Extensible | Yes (NodeJS Modules) | Yes (Javascript plugins) | Yes (plugins)
Realtime | Optional (WebSockets) | No | No
UI Hosting | Yes | No | Yes
Local Dev | Yes | Yes | Yes
Local Install | Yes | Yes | Yes
Hosted | No | Yes (Subscription) | No
VCS Friendly | Yes | No | Yes
Tasks/Jobs | Via plugin | Via plugin? | Via plugin?
Execute arbitrary code | Via plugins | Via Plugin?
Email support | Via plugin | No | Yes
Geo Services | Via Mongo | Via Orient DB | Via plugin
User Mangement | Yes | Yes | Yes
User Authorization | Yes | Yes | Yes
Auth: Password | Yes | Yes | Yes
Auth: Facebook | Via plugin | Yes | Via plugin
Auth: Google+ | Via plugin | Yes | Via plugin
Auth: Twitter | Via plugin | No | Via plugin
Auth: Custom | Via plugin | No | Via plugin
Auth: LDAP | ? | ? | ?
A/B Testing | No | No | No
File uploads | S3 via plugin | Yes | Via plugin
Proxy 3rd party services | Via plugin | Via plugin | Via plugin
Admin Console | Yes | Yes | Yes
Push Notifications | No | Yes | No
Integrated Analytics | No | No | No

