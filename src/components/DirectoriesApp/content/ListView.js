import { CollectionView } from 'vendors';
import { DirView } from './dirView';

const ListView = CollectionView.extend({

	tagName: 'ul',

	initialize () {

	},

	childView: DirView,

	collectionEvents: {
		
	},

	childViewOptions () {
		return {
			collection: this.collection
		};

	},

	
});


export { ListView };