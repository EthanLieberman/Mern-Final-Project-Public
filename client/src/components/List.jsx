import React, { useEffect, useState } from 'react'
import style from './List.module.css'
import ReactPaginate from 'react-paginate';

const List = (props) => {
    const { restaraunts, winner, darkmode } = props
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    // Refreshing the pagination on page change, fires every time the offset is changed
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Items to be displayed: ${itemOffset} to ${endOffset}`);
        setCurrentItems(restaraunts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(restaraunts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Handle pagination on clicks, to set the item offset to the appropriate value for the selected page
    const handlePageChange = (e) => {
        const newOffset = (e.selected * itemsPerPage) % restaraunts.length;
        console.log(`On page ${e.selected} with offset ${newOffset}`)
        setItemOffset(newOffset);
    };

    return (
        <div className={style.main}>

            {/* Renders details of the "winning" restaurant, selected at random */}
            <div style={darkmode? {color: 'white'} : {color: 'black'}}>
                Recommend
                <p>{winner.name}</p>
                <p>{winner.formatted_address}</p>
                <p>{winner.opening_hours.open_now ? 'Open'
                    : 'closed'}</p>
                <p>Rated {winner.rating}</p>
            </div>

            {/* Renders names of restaurants for the current page of results */}
            {
                currentItems && currentItems.map((place, inx) => {
                    return (
                        <div key={inx} className={style.map} style={darkmode? {color: 'white'} : {color: 'black'}}>{place.name}</div>
                    )
                })
            }

            {/* Pagination component, with a functional component to handle page switches */}
            <ReactPaginate
                breakLabel="..."
                nextLabel={null}
                previousLabel={null}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName={style.pagination}
                pageLinkClassName={style.list}
            />

        </div>
    )
}

export default List