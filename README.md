[![Actions Status](https://github.com/UziTech/jasmine2-tagged/workflows/CI/badge.svg)](https://github.com/UziTech/jasmine2-tagged/actions)

# Jasmine 2.x-3.x Tagged

This is similar to [jasmine-tagged](https://github.com/atom/jasmine-tagged) except it works with Jasmine 2.x or 3.x

# Jasmine Tagged

Allows for tagging and filtering of specific
[Jasmine](https://github.com/jasmine/jasmine)
specs depending on the platform.

## Installing

```sh
npm install jasmine2-tagged
```

## Building
*   Clone the repository
*   Run `npm install`
*   Run `grunt` to compile the CoffeeScript

## Using

```coffeescript
  describe "Javascript", ->
    describe "on the #server", ->
      it "can access files"
    describe "on the #browser", ->
      it "can access localstorage"
```

In jasmine-helper.js

```coffeescript
require 'jasmine2-tagged'

jasmineEnv = jasmine.getEnv()
jasmineEnv.setIncludedTags(["browser"])

# By default untagged specs are run, uncomment to change that behavior
# jasmineEnv.includeSpecsWithoutTags(false)
```
