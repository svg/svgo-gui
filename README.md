## SVGO GUI v0.0.1

[Node-WebKit](https://github.com/rogerwang/node-webkit) based GUI for [SVGO](https://github.com/svg/svgo).

Mac OS X app only in this very first test version.

![screenshot](https://raw.github.com/svg/svgo-gui/master/screenshot.png)

## Download

[svgo-gui.7z](https://dl.dropbox.com/s/4k1kerm14pbrcly/svgo-gui.7z?dl=1) (16.44 MiB)

## How to contribute (sick way, TL;DR)

1. `mkdir svgo-gui && cd svgo-gui && git init`
2. `curl -O http://s3.amazonaws.com/node-webkit/v0.3.2/nw_release_mac.zip`
3. `unzip nw_release_mac.zip && rm nw_release_mac.zip && mv node-webkit.app svgo-gui.app` 
4. `git remote add origin <YOUR FORK>`
5. `git fetch origin`
6. `git reset --hard origin/master`
7. `cd svgo-gui.app/Contents/Resources/app.nw`
8. `npm install git://github.com/svg/svgo.git`
9. edit `index.html`, `styles.css` or `script.js`
10. run `svgo-gui.app`
11. commit!

## How to contribute (normal way)

1. coming soon


## TODO

1. **automated app building**
2. multiply files drag-n-drop
3. information about file size profit and time
4. icon
5. Windows version
6. Linux version
7. …