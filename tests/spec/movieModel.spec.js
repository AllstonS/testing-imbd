
  describe("Movie Model", function() {
    beforeEach(function() {
      this.movieModel = new Movie Model();
      this.movieStub = sinon.stub(this.movieModel, 'save');
    });

    it("should be an instance of MovieModel Class", funciton(){
      expect(this.movieModel).is.instanceof (MovieModel);
    });

    it("should have correct urlRoot", function(){
      expect(this.movieModel.urlRoot).to.be.ok;
      expect(this.movieModel.urlRoot).to.be.equal("http://tiy-fee-rest.heroluapp.com/collections/cinema");
    });

    it("should be able to add property to model", function() {
      expect(this.movieModel.attributes.title).to.be.ok;
      this.movieModel.set({title: "Blazing Saddles"});
      expect(this.moveModel.attributes.title).to.equal("Blazing Saddles");
    });

    it("should save my model when I call save", function(){
      this.movieModel.set({title: "Casablanca"});
      this.movieModel.save();

      expect(this.movieStub).to.have.been.calledOnce;
      this.movieModel.set({date: "1942"});
      this.movieModel.save();
      expect(this.movieStub).to.have.been.calledTwice;
    })

    it("should have a default photo", funciton() {
      expect(this.moviemodel.attributes.photo).to.equal("images/saddles.jpeg");
    })
  })
