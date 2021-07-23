import {makeAutoObservable} from 'mobx';
import { getItem } from '../services/getItem';

class Catalog {
    constructor() {
        makeAutoObservable(this)
    }
    

    
    

    items = {};
    list = [];
    nav = {};
    
    
    
    

    async getItem() {
        this.items = await getItem();
        this.setList();
        this.setNav();
    }

    setList() {
        this.list = this.items.list;
    }

    setNav() {
        this.nav = this.items.nav;
    }
    
    
}



export const catalog = new Catalog();

