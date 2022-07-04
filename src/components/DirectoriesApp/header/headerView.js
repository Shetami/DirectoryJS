import { View, _ } from 'vendors';
import { Directories } from '../content/dirCollection';



const HeaderView = View.extend({

	className: 'directories',

    template: _.template(`
    <button class="create">Создать директорию</button>
    <button class="delete">Удалить директорию</button>`
	),

	events: {
		'click .create': 'create_dir'
		
	},

	create_dir(){
		this.collection.add({title:"new", child: new Directories()});
	},

	del_dir(){
		this.collection.add({title:"new"});
	}

});

export { HeaderView };