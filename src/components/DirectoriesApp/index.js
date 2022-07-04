import { ListView } from './content/ListView';
import { Directories } from './content/dirCollection';
import { HeaderView } from './header/HeaderView';
import { View, _ } from 'vendors';

const DirectoriesView = View.extend({
	className: 'app',
	regions: {
		headerRegion: '#header',
		contentRegion: '#content',
		footerRegion: '#footer'
	},



	onRender () {

		const options = {
			collection: new Directories(),
		};

		this.showChildView('headerRegion', new HeaderView(options));
		this.showChildView('contentRegion', new ListView(options));

	},



	template: _.template('<div id="header"></div><div id="content"></div><div id="footer"></div>')

});

export { DirectoriesView };