NODE-WEBKIT=v0.4.2

.PHONY: osx
osx:
	@rm -rf osx/svgo-gui.app
	@echo downloading node-webkit engine…
	@curl -sSO http://s3.amazonaws.com/node-webkit/${NODE-WEBKIT}/node-webkit-${NODE-WEBKIT}-osx-ia32.zip
	@echo unpacking, renaming and copying files…
	@unzip -qq node-webkit-${NODE-WEBKIT}-osx-ia32.zip
	@rm node-webkit-${NODE-WEBKIT}-osx-ia32.zip nwsnapshot
	@mv node-webkit.app osx/svgo-gui.app
	@mkdir osx/svgo-gui.app/Contents/Resources/app.nw/
	@ln app.nw/index.html osx/svgo-gui.app/Contents/Resources/app.nw/index.html
	@ln app.nw/styles.css osx/svgo-gui.app/Contents/Resources/app.nw/styles.css
	@ln app.nw/script.js osx/svgo-gui.app/Contents/Resources/app.nw/script.js
	@ln app.nw/package.json osx/svgo-gui.app/Contents/Resources/app.nw/package.json
	@ln -f osx/app.icns osx/svgo-gui.app/Contents/Resources/app.icns
	@ln -f osx/Info.plist osx/svgo-gui.app/Contents/Info.plist
	@echo installing svgo module…
	@cd osx/svgo-gui.app/Contents/Resources/app.nw/; npm install &>/dev/null
	@echo done!
	@echo osx/svgo-gui.app is ready, changes in ./app.nw/ will automatically it.

.PHONY: linux
linux:
	@rm -rf linux/
	@echo downloading node-webkit engine…
	@curl -sSO http://s3.amazonaws.com/node-webkit/${NODE-WEBKIT}/node-webkit-${NODE-WEBKIT}-linux-ia32.tar.gz
	@echo unpacking, renaming and copying files…
	@mkdir linux
	@cd linux; tar -xvf ../node-webkit-${NODE-WEBKIT}-linux-ia32.tar.gz --strip 1 > /dev/null 2>&1
	@rm node-webkit-${NODE-WEBKIT}-linux-ia32.tar.gz
	@echo installing svgo module…
	@cd app.nw/; npm install > /dev/null 2>&1
	@echo making application…
	@cd app.nw/; zip -0yrq ../linux/app.nw *.* node_modules/
	@cat linux/nw linux/app.nw > linux/svgo-gui
	@chmod +x linux/svgo-gui
	@rm linux/libffmpegsumo.so linux/nw linux/app.nw
	@echo done!
	@echo linux/svgo-gui app is ready, nw.pak must be shipped along with it.
