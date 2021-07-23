import './pagination.css';

const Pagination = ({page, pageCount, onPageSelected}) => {
    const renderItems = (page, pageCount) => {
        let items = [];
        for (let i = 1; i <= pageCount; i++) {
            const classActive = page === i ? 'active' : '';
            const item = (
                <li key={i}>
                    <button className={classActive} onClick={() => onPageSelected(i)}>{i}</button>
                </li>
            );
            items.push(item);
        }
        return items;
    }
    
    const items = renderItems(page, pageCount);
    
    return <ul className="pagination">{items}</ul>;
}

export default Pagination;