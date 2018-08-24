const Cosmic = require('cosmicjs')();

const config = require('./config');

const choreBucket = Cosmic.bucket({
  slug: config.BUCKET_SLUG,
  read: config.API_READ_ACCESS_KEY,
  write: config.API_WRITE_ACCESS_KEY
});

/**
 * Retrieve n chores from the bucket
 */
const getChores = async function() {
  const choreData = await choreBucket
    .getObjects({})
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  console.log(choreData);
  let chores = [];
  choreData.objects.map(item => {
    chores.push(item.title);
  });
  return chores;
};

/**
 * Add a chore to the bucket
 */
const addChore = async function(chore) {
  const params = {
    title: chore,
    type_slug: 'Chores',
    content: null
  };
  var returnData = await choreBucket
    .addObject(params)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  return !!returnData;
};

module.exports = {
  getChores,
  addChore
};
