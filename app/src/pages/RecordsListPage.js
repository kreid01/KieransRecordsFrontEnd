/* eslint-disable array-callback-return */
import React from 'react';
import Filter from '../features/RecordList/Filter';
import Record from '../components/UI/Record'

export default function RecordsList(props) {

         
            const recordData = props.recordData.reduce((acc, rec) => {
                if(!acc.find(u => u.name === rec.name)) {
                    acc.push(rec)
                }
                return acc
              }, [])
                        
            const mappedData = recordData.map((record, i) => {
                let id = 0
                props.allRecords.map((rec, i) => {
                    if(record.name === rec.name) {
                        id = i
                    }
                })
                const newArr = [recordData]
                newArr.splice(i, 1)
                if(newArr.includes(record)) {
                } else 
                return (
                   <Record 
                   key={i}
                   id={id}
                   i={i}
                   name={record.name}
                   artist={record.artist}
                   imageUrl={record.imageUrl}
                   songCount={record.songCount}
                   releaseYear={record.releaseYear}
                   price={record.price}
                   record={record}
                   />
                )}
            )
        
    return (
        <div className='record--list--page'>
            <header style={props.themeStyles} className='record--list--header'>
            </header>
                <div style={props.themeStyles} className='record--list--container'>
                <div className='filter--conatiner'>
                    <Filter
                    sortBy={props.sortBy}
                    resetFilters={props.resetFilters}
                    changeSortBy={props.changeSortBy}
                    genreFilter={props.genreFilter}
                    setGenreForPagedRecords={props.setGenreForPagedRecords}
                    changeSearchParams={props.changeSearchParams}
                    />
                </div>
                <div className='record--container'>
                    {mappedData}
                </div>
           </div>  
            {props.loading && <p>Loading...</p>}
            {props.error && <p>Error!</p>}
            <div ref={props.loader} />       
        </div>

    )
}