class ApiService {
    _apiBase = 'https://pickcase.ua';
    _apiParams = '/bitrix/services/main/ajax.php?action=generator&model=iphone-x&c=diva:rest&mode=ajax&lang=ru';
    
    async _getData(url) {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error('fetch error');
        } 
        
        return res.json();
    }
    
    async getPageData(page = 1) {
        const fullData = await this._getData(this._apiBase + this._apiParams + `&page=${page}`);
        
        return {
            page: fullData.data.nav.currentPage,
            pageCount: Math.ceil(fullData.data.nav.recordCount/fullData.data.nav.pageSize),
            products: fullData.data.list.map(product => this._transformProduct(product))
        };
    }
     
    _transformProduct({id, name, img}) {
        return {
            id,
            name,
            img: this._apiBase + img[0].url,
        };
    }
}

export default ApiService;