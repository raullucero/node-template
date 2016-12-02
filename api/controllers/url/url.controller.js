const Urls = require('./url.model').Url;

function generateHash(url) {

}

module.exports = {

  saveUrl: (req, res) => {   
    const body = {
      original_url: req.body.original_url,
      user_id: req.body.user,
      shorted: 'shorted',
      last_use: Date.now(),
      creation: Date.now()
    }
    const newUrl = new Urls(body);
    console.log(body)
    newUrl.save()
           .then(data => res.json(data))
           .catch(err => err);
  },

  getUrls: (req, res) => {
    Urls.find((err, doc) => {
      return res.send(doc);
    });
  },

  getUrl: (req, res) => {
    Urls.findOne({ 'shorted': req.params.shorted }, function (err, url) {
      if (!url) {
        res.status(404);
        return res.send('not found');
      }
      return res.json(url);
    });
  }
}