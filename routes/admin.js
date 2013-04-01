module.exports = function(models){
    this._models = models;
    this.deleteCause = function(req, res){

    }

    this.addCause = function(req, res){

        if (app.requireAuth === true && req.loggedIn === false)
            res.redirect('/auth/twitter');

        //render the add page
        res.render('add.jade', {
            locals: {
                title: 'Node.js Express MVR Template',
                page: 'add'
            }
        });
    }

    this.editCause = function(req, res){

    }

    this.createCause = function(req, res){
        var self = this;
        var now = new Date();

        var Post = self._models.examples;
        var post = new Post();
        post.name = req.param('doc');
        post.date = now;
        post.save(function(err) {
            console.log('error check');
            if(err) { throw err; }
            console.log('saved');
        });
        res.redirect('/list');
    }
}
