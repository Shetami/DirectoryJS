import { View, _} from 'vendors';
import { Directories } from './dirCollection';
import { ListView } from './ListView';

export const DirView = View.extend({


    className: 'Directory',

	initialize () {

		console.log(this.model.toJSON());

	},

	template: _.template(`
    <div class="title_dir"><%= title %></div>
	<button class="create_dir">Создать директорию</button>
	<button class="open_dir">Открыть директорию</button>
    `),

	events: {
		'click .open_dir': 'openDir',
		'click .create_dir': 'createDir'
	},

    openDir(){
        this.collection = this.collection.child
    },

	createDir(){	
		this.collection.add({title:"arr", child: new Directories()})
	}


})