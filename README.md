# Front

## Instructions

* Make sure you have yarn and node >= 10 installed
* Install the Now CLI with `yarn global add now`
* Run `yarn` to install dependencies
* `now dev` will run the application locally at localhost:3000

## Answered Questions

## Open Questions

### Browser support?

Dan's answer: Please don't say IE11.

### Git flow?

Dan's answer: I'm in favor of a proper flow, with a dev/canary branch and and tagged releases to master.

### Do we need to build apps independently but similar, or should we build one app?

Dan's answer: Independent apps adds a magnitude of complexity. I'm operating under the assumption we do want independence but it's worth asking, because if we can say yes to one app, we get a much cleaner codebase.

### How do we want to host this?

Dan's answer: My vote is for Now. Tidy, featureful, lambdas, without major concessions. Netlify Functions aren't there yet, and Serverless requires too much overhead in my opinion.

### Do we need live server-side rendering, or is a static build okay?

Dan's answer: For true up to date authentication with valid response statuses, SSR is the way to go. Since this is ostensibly internal facing, the performance gainz from having the code hydrated from the server are less important to me.

### How do we plan on doing CI/CD?

Dan's answer: I've never worked with TeamCity, but if it's as simple as getting a Docker instance that can install dependencies and run bash/js scripts I'm good.

### What is our expectation for testing?

### Do we need versioned packages, or is shared up-to-date code sufficient?

Dan's answer: Versioned packages makes development tricky, and requires some specific orthodoxies around package publishing, especially with a multi-app monorepo. I'm not really clear _how_ people will use this repo, and I'm saving this part for the end.

### Where do we want to host our packages?

Dan's answer: Private NPM works fine for me. Would also be interested in GitHub package registry (I'm a sucker for keeping everything in the repo), but I'm not sure on the status of that feature for GitHub Enterprise.

### If we use Lerna to publish to our package registry, do we want fixed or independent releases?

Dan's answer: Fixed releases (all packages get bumped if any packages get bumped) is simple but verbose. Independent releases feels better but requires a good documentation scheme so people know the difference between each package.

### What do we want to use for authentication?

Dan's answer: Auth0 offers a lot of tools. I'm also fine pinging an endpoint on each request and getting back a user/role/permissions object from a token cookie or whatever.