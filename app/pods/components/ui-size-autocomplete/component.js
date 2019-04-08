import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service(),
  sizes: A([]),

  actions: {
    searchSizes(name) {
      set(this, 'sizeName', name);
      return get(this, 'store').query('size', {name}).then((sizes) => {
        return set(this, 'items', sizes);
      });
    },
    addSize(sizeName) {
      let size = get(this, 'store').createRecord('size');
      set(size, 'name', sizeName);

      size.save().then((savedSize) => {
        get(this, 'afterAddSize')(savedSize);
        get(this, 'sizes').push(savedSize);
      });
    }
  },

  items: computed('selectedSize', 'selectedSize.name', 'sizes', 'sizes.length', function() {
    let sizes = get(this, 'sizes');

    if (get(this, 'selectedSize.name')) {
      sizes.push(get(this, 'selectedSize'));
    }

    return sizes;
  }),
});
