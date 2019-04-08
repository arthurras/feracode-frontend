import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service(),
  stock: service(),

  actions: {

    save() {
      let diaper = get(this, 'diaper');

      return diaper.save().then(() => {

        return get(this, 'stock').saveMany(get(diaper, 'stock'), () => {
          return get(this, 'redirectToList')();
        });

      });
    },

    addStock() {
      let stock = get(this, 'store').createRecord('stock');
      set(stock, 'diaper', get(this, 'diaper'));

      return get(this, 'diaper.stock').addObject(stock);
    },

    afterAddSize(stock, size) {
      set(stock, 'size', size);
    }

  }

});
