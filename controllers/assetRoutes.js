// Importing dependencies
const express = require("express");
//const db = require("../config/config");
//const Asset = db.assets;
//const Dtype = db.dtypes;

// Creating a Router
const router = express.Router();

// Get the asset Form
router.get("/register-assets", (req, res) => {
  res.render("assetForm")
})
/*
// Record dtypes
router.post("/dtype", async (req, res) => {
  // DTYPE SECTION
  try {
    const newDtype = new Dtype(req.body);
    await newDtype.save()
    res.send('Your entry is saved.');
  }
  catch (error) {
    console.error(error)
    res.send('Sorry, your entry is not saved. Try again!')
  }
})

// Record assets
router.post("/register-assets", async (req, res) => {
  // ASSET SECTION
  try {
    const newAsset = new Asset(req.body);
    await newAsset.save()
    res.send('Your entry is saved.');
  }
  catch (error) {
    console.error(error)
    res.send('Sorry, your entry is not saved. Try again!')
  }
})

// Display recorded assets
router.get('/asset-list', (req, res) => {
  Asset.findAll()
    .then((asset) => {
      res.render('assetsReport', { asset });
    })
    .catch(() => {
      res.send('Sorry! Could not retrieve assets from the database.');
    })
})

// Search asset-record by customerName
router.get('/search', (req, res) => {
  Asset.findAll({ where: { customerName: req.query.customerName } })
    .then((asset) => {
      res.render('assetsReport', { asset });
    })
    .catch(() => {
      res.send('Sorry! did not find record in the list.');
    })
})

// Update the asset record where id is ...
router.get('/update-asset/:id', function(req, res) {
  Asset.findByPk(req.params.id).then(function(asset) {
    asset.update({
      'supplierName': 'STEPHEN CRISPIN'
    }).then((asset) => {
      res.redirect('/asset-records');
    });
  });
});

// Delete the supplier record where id is ...
router.get('/delete-asset/:id', function (req, res) {
  Asset.findByPk(req.params.id).then(function (asset) {
    asset.destroy();
  }).then((asset) => {
    //res.sendStatus(200);
    res.redirect('/asset-records');
  });
});
*/
//
module.exports = router;