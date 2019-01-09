# Node.js the Right Way Work Through

A work through of the book Node.js the Right Way

## Getting Started

Make sure your target.txt file and your scripts are located in the same directory!

### Create a target.txt file within an empty directory
```
$ touch target.txt
```

## Running the scripts

#### Running net-watcher.js
```
$ node --harmony net-watcher.js target.txt
```
then run in a seperate Terminal window
```
$ telnet localhost 5150
```

#### Running net-watcher-json-client.js
```
$ node --harmony net-watcher-json-client.js
```

#### Running net-watcher-json-test-service.js
```
$ node --harmony net-watcher-json-test-service.js
```

#### Running net-watcher-ldj-client.js
```
$ node --harmony net-watcher-ldj-client.js
```

## Acknowledgments

* Working examples from the book Node.js the Right Way
* Repo by Tyler Phillips
