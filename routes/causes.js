module.exports = function(models){
    this.models = models;
    this.list = function(req, res){
        var self = this;

        if (app.requireAuth === true && req.loggedIn === false)
            res.redirect('/auth/twitter');

        //get all the examples
        self.models.examples.find({}, function(err, docs){

            //render the index page
            res.render('list.jade', {
                locals: {
                    title: 'Node.js Express MVR Template',
                    page: 'list',
                    examples: docs
                }
            });

        });
    }
    this.view = function(req, res){
        var self = this;

        if (app.requireAuth === true && req.loggedIn === false)
            res.redirect('/auth/twitter');

        //get the example
        self.models.examples.findById(req.params.id, function(err, doc){

            //render the view page
            res.render('view.jade', {
                locals: {
                    title: 'Node.js Express MVR Template',
                    page: 'view',
                    example: doc
                }
            });

        });
    }

    this.search = function(req, res){

    }
}

