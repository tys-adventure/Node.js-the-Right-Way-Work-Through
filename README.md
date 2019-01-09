
# Node.js the Right Way Work Through

A work through of the book Node.js the Right Way

## Getting Started

### Prerequisites/Installing

Install Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install Node NPM

```
$ brew install node
```

Make sure your target.txt file and your scripts are located in the same directory!

### Create a target.txt file within an empty directory
```
$ touch target.txt
```

## Running the scripts

Running watcher.js
```
$ node --harmony watcher.js
```

Running watcher-argv.js
```
$ node --harmony watcher-argv.js target.txt
```

Running watcher-spawn.js
```
$ node --harmony watcher-spawn.js target.txt
```

Running watcher-spawn-parse.js
```
$ node --harmony watcher-spawn-parse.js target.txt
```

Running read-simple.js
```
$ node --harmony read-simple.js
```

Running write-simple.js
```
$ node --harmony write-simple.js
```

Running read-stream.js
```
$ node --harmony read-stream.js target.txt
```

## Acknowledgments

* Working examples from the book Node.js the Right Way
* Repo by Tyler Phillips
