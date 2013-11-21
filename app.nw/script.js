(function(doc) {

    var FS = require('fs'),
        GUI = require('nw.gui'),
        SVGO = require('svgo'),
        // Removing the view box causes scaling issues in IE
        svgo = new SVGO({plugins:[{removeViewBox:false}]}),
        body = doc.body,
        holder = doc.querySelector('.holder'),
        list = doc.querySelector('.list'),
        regSVGFile = /\.svg$/;

    // send files to the not already running app
    // ("Open With" or drag-n-drop)
    if (GUI.App.argv.length) {

        var files = GUI.App.argv.map(function(path) {
            return {
                name: path.substring(path.lastIndexOf('/') + 1),
                path: path
            };
        });

        onFilesDrop(files);

    }

    // send files to the already running app
    // ("Open With" or drag-n-drop)
    GUI.App.on('open', function(path) {

        onFilesDrop([{
            name: path.substring(path.lastIndexOf('/') + 1),
            path: path
        }]);

    });

    body.ondragover = function() {

        return false;

    };

    body.ondragenter = function() {

        holder.classList.add('holder_state_hover');
        return false;

    };

    // drag-n-drop files to the app window's special holder
    body.ondrop = function(e) {

        var files = [].slice.call(e.dataTransfer.files);

        onFilesDrop(files);

        e.preventDefault();

    };

    function onFilesDrop(files) {

        var docFragment = doc.createDocumentFragment();

        files.forEach(function(file) {

            if (regSVGFile.test(file.name)) {

                var tr = doc.createElement('tr'),
                    name = doc.createElement('td'),
                    before = doc.createElement('td'),
                    after = doc.createElement('td'),
                    profit = doc.createElement('td');

                tr.className = 'item';
                name.className = 'item__cell item__cell_type_name';
                name.appendChild(doc.createTextNode(file.name));
                before.className = 'item__cell item__cell_type_before';
                after.className = 'item__cell item__cell_type_after';
                profit.className = 'item__cell item__cell_type_profit';

                tr.appendChild(name);
                tr.appendChild(before);
                tr.appendChild(after);
                tr.appendChild(profit);

                docFragment.appendChild(tr);

                (function(path, before, after, profit) {

                    FS.readFile(path, 'utf8', function(err, data) {

                        var inBytes = Buffer.byteLength(data, 'utf8'),
                            outBytes;

                        try {

                            svgo.optimize(data, function(result) {

                                FS.writeFile(path, result.data, 'utf8', function() {

                                    outBytes = Buffer.byteLength(result.data, 'utf8');

                                    before.appendChild(
                                        doc.createTextNode(
                                            Math.round((inBytes / 1024) * 1000) / 1000 + ' KiB'
                                        )
                                    );
                                    after.appendChild(
                                        doc.createTextNode(
                                            Math.round((outBytes / 1024) * 1000) / 1000 + ' KiB'
                                        )
                                    );
                                    profit.appendChild(
                                        doc.createTextNode(
                                            Math.round((100 - outBytes * 100 / inBytes) * 10) /  10 + '%'
                                        )
                                    );

                                });

                            });

                        } catch(e) {

                            tr.classList.add('item_error_yes');
                            tr.setAttribute('title', e.message);
                            profit.appendChild(doc.createTextNode('error'));

                        }

                    });

                })(file.path, before, after, profit);

            }

        });

        if (docFragment.childNodes.length) {

            body.classList.add('page_layout_list');
            body.classList.remove('page_layout_holder');
            list.appendChild(docFragment);

        } else {

            holder.classList.remove('holder_state_hover');

        }

    }

})(document);
