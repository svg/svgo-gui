(function() {

    var FS = require('fs'),
        SVGO = require('svgo'),
        svgo = new SVGO(),
        holder = document.getElementById('holder');

    holder.ondragover = function () {

        document.title = 'svgo-gui';
        this.className = 'hover';
        return false;

    };

    holder.ondragend = function () {

        this.className = '';
        return false;

    };

    holder.ondrop = function(e) {

        var path = e.dataTransfer.files[0].path,
            output;

        svgo.fromFile(path)
            .then(function(min) {

                output = FS.createWriteStream(path, { encoding: 'utf8' });
                output.write(min.data);
                output.end();

                document.title = 'done!';

            })
            .done();

        e.preventDefault();

    };

})();
