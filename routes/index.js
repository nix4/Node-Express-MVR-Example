

module.exports = function(app, models, mongoose){
    var Admin = require("./admin.js"),
        admin = new Admin(models),
        Causes = require("./causes"),
        causes = new Causes(models);

  /**
   *  Index
   */
  app.get('/', function(req, res){
    if (app.requireAuth === true && req.loggedIn === false)
      res.redirect('/auth/twitter');

    //get all the examples
    models.examples.find({}, function(err, docs){
      
      //render the index page
      res.render('index.jade', {
          locals: {
            title: app.settings.APP_TITLE,
            page: 'index',
            examples: docs
          }
      });

    });
  });

  app.get('/add', admin.addCause);
  app.post('/posts', admin.create);

  app.get('/list', causes.list);
  app.get('/view/:id', causes.view);

};