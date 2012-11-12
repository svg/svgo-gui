(function() {

    var FS = require('fs'),
        SVGO = require('svgo'),
        svgo = new SVGO(),
        body = document.body,
        holder = document.querySelector('.holder'),
        list = document.querySelector('.list'),
        regSVGFile = /\.svg$/;

    body.ondragover = function() {

        return false;

    };

    body.ondragenter = function() {

        holder.classList.add('holder_state_hover');
        return false;

    };

    body.ondrop = function(e) {

        var files = [].slice.call(e.dataTransfer.files),
            docFragment = document.createDocumentFragment();

        files.forEach(function(file) {

            if (regSVGFile.test(file.name)) {

                var tr = document.createElement('tr'),
                    name = document.createElement('td'),
                    before = document.createElement('td'),
                    after = document.createElement('td'),
                    profit = document.createElement('td');

                tr.className = 'item';
                name.className = 'item__cell item__cell_type_name';
                name.appendChild(document.createTextNode(file.name));
                before.className = 'item__cell item__cell_type_before';
                after.className = 'item__cell item__cell_type_after';
                profit.className = 'item__cell item__cell_type_profit';

                tr.appendChild(name);
                tr.appendChild(before);
                tr.appendChild(after);
                tr.appendChild(profit);

                docFragment.appendChild(tr);

                (function(path, before, after, profit) {

                    svgo.fromFile(path)
                        .then(function(min) {

                            var output = FS.createWriteStream(path, { encoding: 'utf8' });
                            output.write(min.data);
                            output.end();

                            before.appendChild(
                                document.createTextNode(
                                    Math.round((min.info.startBytes / 1024) * 1000) / 1000 + ' KiB'
                                )
                            );
                            after.appendChild(
                                document.createTextNode(
                                    Math.round((min.info.endBytes / 1024) * 1000) / 1000 + ' KiB'
                                )
                            );
                            profit.appendChild(
                                document.createTextNode(
                                    Math.round((100 - min.info.endBytes * 100 / min.info.startBytes) * 10) /  10 + '%'
                                )
                            );

                        })
                        .fail(function(e) {
                            tr.classList.add('item_error_yes');
                            tr.setAttribute('title', e);
                            profit.appendChild(document.createTextNode('error'));
                        })
                        .done();

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

        e.preventDefault();

    };

})();
