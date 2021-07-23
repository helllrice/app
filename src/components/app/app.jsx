import { Component } from "react";
import ApiService from "../../services/api-service";
import Pagination from "../pagination";
import Products from "../products/products";
import './app.css';

class App extends Component {
    service = new ApiService();
    // 1 state в функц. компонентах
  state = {
        products: null,
        page: null,
        pageCount: null,
        loading: false,
        hasError: false
    }
    // componentDidMount в функц. компонентах хук в жизненных цикдах
    componentDidMount() {
        this.update();
    }
    
    update(page = 1) {
        this.setState({loading: true});
        
        this.service.getPageData(page)
            .then(({page, pageCount, products}) => this.setState({
                page,
                pageCount,
                products,
                loading: false
            }))
            .catch(() => this.setState({hasError: true, loading: false})); 
    }
    
    onPageSelected = (page) => {
        this.update(page);
    }
    
    render() {
        const { page, pageCount, products, loading, hasError } = this.state;
        
        if (loading) {
            return <div>loading...</div>
        }
        
        if (hasError) {
            return <div>Error!!!</div>
        }
        
        if (!products) {
            return null;
        }
        
        return (
            <div>
                <Products items={products} />
                <Pagination page={page} pageCount={pageCount} onPageSelected={this.onPageSelected} />
            </div>
        );
    }
}

export default App;