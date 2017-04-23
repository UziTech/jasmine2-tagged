[![Build Status](https://travis-ci.org/UziTech/jasmine2-tagged.png)](https://travis-ci.org/UziTech/jasmine2-tagged)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/9vlhm6tark45cyov?svg=true)](https://ci.appveyor.com/project/UziTech/jasmine2-tagged)

# Jasmine 2.x Tagged

[![Greenkeeper badge](https://badges.greenkeeper.io/UziTech/jasmine2-tagged.svg)](https://greenkeeper.io/)

This is similar to [jasmine-tagged](https://github.com/atom/jasmine-tagged) except it is for Jasmine 2.x

# Jasmine Tagged

Allows for tagging and filtering of specific
[Jasmine](https://github.com/pivotal/jasmine) specs depending on the
platform.

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
