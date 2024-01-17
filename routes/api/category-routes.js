const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
 
});
// find one category by its `id` value
 // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    include: [Product]
 })

  if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  
 router.post('/', async (req, res) => {
   // create a new category
   try {
     const categoryData = await Category.create(req.body);
      // Send the newly created row as a JSON object
     res.status(200).json(categoryData);
 } catch (err) {
     res.status(400).json(err);
   }
  });
 

 router.put('/:id', (req, res) => {
   // update a category by its `id` value
  Category.update(
     { id: req.body.id,
       category_name: req.body.category_name
      },
    {
      where: {
       category_id: req.params.category_id,
      },
    }
  )
    .then((updatedCategory) => {
     // Sends the updated book as a json response
     res.json(updatedCategory);
   })
   .catch((err) => {
    console.log(err);
    res.json(err);
   });
  }); 
 

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.id
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
