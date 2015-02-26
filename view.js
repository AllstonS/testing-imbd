//Model view

  var MovieView = Backbone.View.extend({
    template: _.template($('#movieTmpl').html()),
      tagName: 'article',
      initialize: function(){
      },

      events: {
        "click .delete-Movie": "deleteMovie",
        "click .edit-Movie": "showMovie",
        "submit .submit-edit": "editMovie"
      },

      showEdit: function () {
        this.$el.find('.edit-movie').hide();
        this.$el.find('').hide();
      },

      render: function() {
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);

        return this;
      },

      removeMovie: function(){
        this.$el.remove();
        this.model.destroy();

      },

    editMovie: function(){
      event.preventDefault();
      this.model.set ({
        title: $('#update-movie').find('input[name="editTitle"]').val(),
        image: $('#update-movie').find('input[name="editImage"]').val(),
        date: $('#update-movie').find('input[name"editDate"]').val(),
        synopsis: $('#update-movie').find('textarea[name="editSynopsis"]').val(),
      });

      this.model.save();

      $('.edit-movie').show();
      $('').show();

      $('.submit-edit').hide();
      $('#update-movie').hide();
  }
});

// Collection view

  var AppView = Backbone.View.extend ({
    el:$('section'),
    initialize: function (){
      console.log('appView initialized');
      this.addAllMovies();
    },

    events: {

      "submit #createMovie": "createMovie",
      "click .edit-movie": "editMovieCollection"

    },

    createMovie: function (event) {
      event.preventDefault();
      var newMovie = {
        title: $('#createMovie').find('input[name="newTitle"]').val(),
        image: $('#createMovie').find('input[name="newImage"]').val(),
        released: $('#createMovie').find('input[name="newDate"]').val(),
        synopsis: $('#createMovie').find('input[name="newSynopsis"]').val()
      };

      var newModelMovie = new MovieModel(newMovie);
        mewModelMovie.save();
          console.log(this.collection.length);
        this.collection.add(newModelMovie);
        this.$el.find('article').remove();
          console.log(this.collection.length);
      //this.addOneMovie(newModelMovie);// alternative method
        this.addAllMovies();
          console.log();
        this.$el.find('#createMovie').find('input, textarea').val('');

    },

    editMovieCollection: function (){
      this.$el.find('article').remove();
      this.addAllMovies();
    },

    addOneMovie: function (movie) {
      var movieView = new MovieView({model: movie});
      this.$el.append(movieView.render().el);
      },

      addAllMovies: function () {
        _.each(this.collection.models, this.addOneMovie, this)

      }
    });
