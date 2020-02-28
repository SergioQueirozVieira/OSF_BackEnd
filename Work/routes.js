const mdbClient = require('mongodb').MongoClient;

 const mongoClientUrl = "mongodb+srv://admin:admin@osfacademybackend-bsw7j.mongodb.net/test?retryWrites=true&w=majority";
 
 

  exports.mens = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("categories");
	  collection.find({name : 'Mens'}).toArray(function(err, doc) {
		res.render("mens", {
		  // Template data
		  subCategories : doc[0].categories,
		  categoryName: doc[0].page_title,
		  categoryDescription: doc[0].page_description
		});
	  });
	});
  };

  exports.subMensClothing = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("products");
	  collection.find({ primary_category_id: { $in: [ "mens-clothing-dress-shirts", "mens-clothing-pants", "mens-clothing-shorts", "mens-clothing-sportscoats", "mens-clothing-suits"] } }).toArray(function(err, doc) {
		res.render("subMensClothing", {
		  // Template data
		  products : doc
		});
	  });
	});
  };

  exports.subMensAcessories = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("products");
	  collection.find({ primary_category_id: { $in: [ "mens-accessories-gloves", "mens-accessories-ties", "mens-accessories-luggage"] } }).toArray(function(err, doc) {
		res.render("subMensAcessories", {
		  // Template data
		  products : doc
		});
	  });
	});
  };

  exports.subWomensClothing = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("products");
	  collection.find({ primary_category_id: { $in: [ "womens-clothing-bottoms", "womens-clothing-dresses", "womens-clothing-jackets", "womens-clothing-tops", "womens-outfits"] } }).toArray(function(err, doc) {
		res.render("subWomensClothing", {
		  // Template data
		  products : doc
		});
	  });
	});
  };

  exports.subWomensJewelry = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("products");
	  collection.find({ primary_category_id: { $in: [ "womens-jewelry-earrings", "womens-jewelry-necklaces"] } }).toArray(function(err, doc) {
		res.render("subWomensJewelry", {
		  // Template data
		  products : doc
		});
	  });
	});
  };

  exports.subWomensAcessories = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("products");
	  collection.find({ primary_category_id: { $in: [ "womens-accessories-footwear", "womens-accessories-ties", "mens-accessories-luggage", "womens-accessories-scarves"] } }).toArray(function(err, doc) {
		res.render("subWomensAcessories", {
		  // Template data
		  products : doc
		});
	  });
	});
  };

  exports.womens = function(req, res) {
	mdbClient.connect(mongoClientUrl, function(err, client) {
	  const collection = client.db("OSFAcademyBackend").collection("categories");
	  collection.find({name : 'Womens'}).toArray(function(err, doc) {
		res.render("womens", {
		  // Template data
		  subCategories : doc[0].categories,
		  categoryName: doc[0].page_title,
		  categoryDescription: doc[0].page_description
		});
	  });
	});
  };

exports.index = function(req, res) {
	res.render("index", { 
	});
};






