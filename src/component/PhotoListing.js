
import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoListItems from './PhotoListItems';
import Loading from './Loading';
import './photoListing.css';
import PhotoCompareTable from './PhotoCompareTable';


function PhotoListing() {
    // state
    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [compareTableData, setCompareTableData] = useState([]);
    const [isCompare, setIsCompare] = useState(false);

    // to handle compare button changes
    const handleCompareChanges = (tableRow, compare) => {
        console.log(tableRow,compare)
        if (compare) {
            // to remove row from the compare table data
            const removeData = compareTableData.filter(row => row.id !== tableRow.id)
            setCompareTableData(removeData);
        } else {
             // to add row from the compare table data
            setCompareTableData([...compareTableData, tableRow]);
        }
    }
    console.log(compareTableData)
    useEffect(() => {
        // to get api photo data
        async function getPhotoData() {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            // console.log(res.data)
            if (res.data.length) {
                // data length is too long, more than 1000 array element so slicing it to test app
                setPhotoData(res.data.slice(0,3));
            } else {
                console.log('error in getting data');
            }
            setLoading(false);
        }
        getPhotoData();
        
    }, [])

    return (
        <>
            <div>
                <h3>Photo Listing</h3>
                {
                    loading && <Loading />
                }
                <div className='photoListingContainer'>
                    {
                        photoData && photoData.map(ele => {
                            return <PhotoListItems data={{ 
                                listItem: ele,
                                isCompare,
                                handleCompareChanges }} 
                                key={ele.id} />
                        }) 
                    }
                </div>
            </div>
            <PhotoCompareTable data={ compareTableData } />
        </>
    )
}

export default PhotoListing;
