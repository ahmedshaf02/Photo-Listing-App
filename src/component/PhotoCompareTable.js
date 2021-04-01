
import './photoListing.css';

function PhotoCompareTable(props) {
    console.log(props)
    const { data } = props;
    return (
        <div>
            <h3>Photo Compare Table</h3>
            {
            data && data.length > 0 ?
            <table className='compareTable'>
                <caption style={{ border: '1px solid black'}}>Compare Table</caption>
                <thead>
                    <tr><th>ID</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Thumbnail URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 && data.map(row =>{
                            return <tr key={ row.id }>
                                <td>{row.id} </td>
                                <td><img width='100' src={row.url} alt='placeholder img' /> </td>
                                <td>{row.title} </td>
                                <td>{row.url} </td>
                                <td>{row.thumbnailUrl} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <p><b>Please select from listing to compare</b></p>
            }
        </div>
    )
}

export default PhotoCompareTable;
