const collection_dummy = [
  {
    id: "1",
    name: "DBZ"
  },
  {
    id: "2",
    name: "Naruto"
  }
];

//Get all collections
exports.getCollection = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, collection_dummy });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Create a collection
exports.createCollection = async (req, res, next) => {
  const { name } = req.body;
  const newCollection = {
    name
  };
  try {
    const collection = await collection_dummy.push(newCollection);
    res.status(201).json({ success: true, collection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a collection
exports.updateCollection = async (req, res, next) => {
  const { collectionId } = req.params;
  const { name } = req.body;
  const updatedCollection = {
    name
  };
  try {
    const collection = collection_dummy.find(p => p.id === collectionId);
    collection.name = updatedCollection.name;
    res.status(200).json({ success: true, collection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a collection
exports.deleteCollection = async (req, res, next) => {
  const { collectionId } = req.params;
  try {
    // const collection = collection_dummy.find(p => p.id === collectionId);
    // collection_dummy.splice(collection, 1);
    res.status(200).json({ success: true, collectionId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
