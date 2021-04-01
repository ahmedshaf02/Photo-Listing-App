
import { useState } from 'react';

function PhotoListItems(props) {
    const { title, id, url } = props.data.listItem;
    const { handleCompareChanges } = props.data;
    const [isCompare, setIsCompare] = useState(false);
    
    const handleClick = () => {
        // if (!isCompare) {
        //     console.log(props.data.listItem)
        //     handleAddTableData(props.data.listItem);
        // } else {
        //     console.log(props.data.listItem)
        //     handleRemoveTableData(props.data.listItem);
        // }
        // handleCompare();
        setIsCompare(!isCompare);
        handleCompareChanges(props.data.listItem, isCompare);
    }
    return (
        <div className='photoListItems'>
            <img src={ url } alt='placeholder img' />
            <div className='textContent'>
                <p>Title: <span>{ title } </span> </p>
                <p>ID: <span>{ id } </span> </p>
                <a href={ url }>URL: <span>{ url } </span> </a>
            </div>
            <button className='imgCompareButton' onClick={ handleClick }>
                { isCompare ? 'Remove' : 'Compare' }
            </button>
        </div>
    )
}

export default PhotoListItems;
