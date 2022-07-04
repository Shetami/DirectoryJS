import { Directories } from './dirCollection';
import { Model } from 'vendors';

const DirModel = Model.extend({

    defaults:{
        title: 'New Directory', 
        child: '',
    },

});



export { DirModel };