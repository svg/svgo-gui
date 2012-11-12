## SVGO GUI v0.0.3

[Node-WebKit](https://github.com/rogerwang/node-webkit) based GUI for [SVGO](https://github.com/svg/svgo).

![Mac OSX X screenshot](https://raw.github.com/svg/svgo-gui/master/screenshots/1.png)&nbsp;&nbsp;![Mac OSX X screenshot](https://raw.github.com/svg/svgo-gui/master/screenshots/2.png)

## Download

* Mac OS X [svgo-gui-osx-ia32.7z](https://dl.dropbox.com/s/kk2oaclxnrtyvle/svgo-gui-osx-ia32.7z?dl=1) (16.44 MiB)
* Windows [svgo-gui-win-ia32.7z](https://dl.dropbox.com/s/mivu4wjnggd7d6w/svgo-gui-win-ia32.7z?dl=1) (14.68 MiB)
* Linux - coming soon

## How to contribute and build

### Mac OS X

1. `cd <YOUR FORK>`
2. `make osx`
3. changes in `./app.nw/` will automatically affect `svgo-gui.app`

### Windows

#### contribute

1. `cd <YOUR FORK>`
2. make changes in `./app.nw/`
3. `cd app.nw`
4. `npm install`
5. `cd ..`
6. download and unpack `http://s3.amazonaws.com/node-webkit/v0.3.3/node-webkit-v0.3.3-win-ia32.zip` here
7. drag-n-drop `app.nw` folder on `nw.exe` to run svgo application

#### build

1. create a zip archive from `./app.nw` folder (better with `store` compression settings)
2. `copy /b nw.exe+app.nw svgo-gui.exe`
3. `nw.pak` + `icudt.dll` must be shipped along with `svgo-gui.exe`

### Linux

1. coming soon

## TODO

1. icon
2. Linux version
3. Linux how-to
4. …

## License

This software is released under the terms of the [MIT license](https://github.com/svg/svgo-gui/blob/master/LICENSE).