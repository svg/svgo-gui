## Mac OS X

1. `cd <YOUR FORK>`
2. `make osx`
3. changes in `./app.nw/` will automatically affect `svgo-gui.app`

## Windows

### contribute

1. `cd <YOUR FORK>/app.nw/`
2. `npm install`
3. make some changes
4. `cd ..`
5. download and unpack `http://s3.amazonaws.com/node-webkit/node-webkit-latest-win-ia32.zip` here
6. drag-n-drop `app.nw` folder on `nw.exe` to run svgo-gui application

### build

1. create a zip archive from `./app.nw` folder (better with `store` compression settings)
2. `copy /b nw.exe+app.nw svgo-gui.exe`
3. `nw.pak` + `icudt.dll` must be shipped along with `svgo-gui.exe`

## Linux

### contribute
1. `cd <YOUR FORK>/app.nw/`
2. `npm install`
3. make some changes
4. `cd ..`
5. download and unpack `http://s3.amazonaws.com/node-webkit/node-webkit-latest-linux-ia32.tar.gz` here
6. `nw app.nw` to run svgo-gui application

### build

1. `cd <YOUR FORK>`
2. make some changes in `./app.nw/`
3. `make linux`