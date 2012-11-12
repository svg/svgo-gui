NODE-WEBKIT = v0.3.3

.PHONY: osx
osx:
	@rm -rf svgo-gui.app
	@echo downloading node-webkit engine…
	@curl -sSO http://s3.amazonaws.com/node-webkit/${NODE-WEBKIT}/node-webkit-${NODE-WEBKIT}-osx-ia32.zip
	@echo unpacking, renaming and copying files…
	@unzip -qq node-webkit-${NODE-WEBKIT}-osx-ia32.zip
	@rm node-webkit-${NODE-WEBKIT}-osx-ia32.zip
	@mv node-webkit.app svgo-gui.app
	@mkdir svgo-gui.app/Contents/Resources/app.nw/
	@ln app.nw/index.html svgo-gui.app/Contents/Resources/app.nw/index.html
	@ln app.nw/styles.css svgo-gui.app/Contents/Resources/app.nw/styles.css
	@ln app.nw/script.js svgo-gui.app/Contents/Resources/app.nw/script.js
	@ln app.nw/package.json svgo-gui.app/Contents/Resources/app.nw/package.json
	@ln -f osx/app.icns svgo-gui.app/Contents/Resources/app.icns
	@ln -f osx/Info.plist svgo-gui.app/Contents/Info.plist
	@echo installing svgo module…
	@cd svgo-gui.app/Contents/Resources/app.nw/; npm install &>/dev/null
	@echo done!
	@echo svgo-gui.app is ready, changes in ./app.nw/ will affect it.
