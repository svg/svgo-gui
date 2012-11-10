NODE-WEBKIT = 0.3.2

.PHONY: osx
osx:
	@rm -rf svgo-gui.app
	@echo downloading node-webkit engine…
	@curl -sSO http://s3.amazonaws.com/node-webkit/v${NODE-WEBKIT}/nw_release_mac.zip
	@echo unpacking, renaming and copying files…
	@unzip -qq nw_release_mac.zip
	@rm nw_release_mac.zip
	@mv node-webkit.app svgo-gui.app
	@mkdir svgo-gui.app/Contents/Resources/app.nw/
	@ln app.nw/index.html svgo-gui.app/Contents/Resources/app.nw/index.html
	@ln app.nw/styles.css svgo-gui.app/Contents/Resources/app.nw/styles.css
	@ln app.nw/script.js svgo-gui.app/Contents/Resources/app.nw/script.js
	@ln app.nw/package.json svgo-gui.app/Contents/Resources/app.nw/package.json
	@ln -f osx/app.icns svgo-gui.app/Contents/Resources/app.icns
	@ln -f osx/Info.plist svgo-gui.app/Contents/Info.plist
	@echo installing svgo module…
	@npm install --silent git://github.com/svg/svgo.git &>/dev/null
	@mv node_modules svgo-gui.app/Contents/Resources/app.nw/
	@echo done!
	@echo svgo-gui.app is ready, changes in ./app.nw/ will affect it.
