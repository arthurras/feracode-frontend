import Service from '@ember/service';

export default Service.extend({

  saveMany(stock, callback) {
    this._saveMany(stock, 0, () => {
      callback();
    });
  },

  _saveMany(stock, count, callback) {
    let diaperSizeStock = stock.objectAt(count);

    if (diaperSizeStock) {
      return diaperSizeStock.save().then(() => {
        this._saveMany(stock, ++count, callback);
      });
    }

    return callback();
  }

});
