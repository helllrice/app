const Products = ({items}) => {
    const renderCards = (items) => {
        return items.map(item => {
            return (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <img src={item.img} alt="ss" />
                </li>
            );
        });
    }
    
    const cards = renderCards(items);
    
    return (
        <ul>
            {cards}
        </ul>
    ); 
}

export default Products;