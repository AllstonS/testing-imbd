
  var MovieModel = Backbone.Model.extend({

    urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/cinema',
    idAttribute: '_id',
    defaults: function() {
      return {
        title: "Blazing Saddles",
        image: "images/saddles.jpeg",
        released: "1974",
        synopsis: "To ruin a western town, a corrupt political boss appoints a black sheriff, who promptly becomes his most formidable adversary.",
      };
    },

    initialize: function(){
      console.log('This movieModel has been initialized');
    }
});


//var movie1 = new MovieModel({title:"Blazing Saddles", image:"images/saddles.jpeg", release: "1974", synopsis: "A comedic Western about a black man becoming mayor of a gang plagued small town assisted by his drifter friend." });
//
//var movie2 = new MovieModel({title: "Casablanca", image: "images/casablanca.jpeg", released:"1942", synopsis: "Set in unoccupied Africa during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications."});
//
//var movie3 = new MovieModel({title: "The Wolfe of Wall Street", image:"images/wolfe.jpeg", released: "2013", synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."});
