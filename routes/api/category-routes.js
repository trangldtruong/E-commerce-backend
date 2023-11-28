const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryData) =>{
    res.json(categoryData);
  });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findAll({
    where: {
      category_id:
    },
  })
  // be sure to include its associated Products
  include: []
  .then((categoryData) => {
    res.json(categoryData)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({

  })
  .then((newCategory) => {
    // Send the newly created row as a JSON object
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      where: {
        category_id: 
      },

    }
  )
  .then((updatedCategory) => {
    // Sends the updated book as a json response
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: 
    },

  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
