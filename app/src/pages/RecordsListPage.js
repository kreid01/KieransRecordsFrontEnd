/* eslint-disable array-callback-return */
import React from 'react';
import { Link } from 'react-router-dom'
import Filter from '../features/RecordList/Filter';
import Record from '../components/UI/Record'

export default function RecordsList(props) {
            
            const emptyArr = Array(7).fill('')
            const pageNumberData = emptyArr.map((item, i) =>  {
                return (
                    <div key={i} className='page--change--item'>
                        <button 
                        name={i+1}
                        className='page--change--button' 
                        onClick={(e) => props.changePage(e)}>{i+1}</button>
                    </div>
                )
            })
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
                   addToCart={props.addToCart}
                   inputThemeStyles={props.inputThemeStyles}
                   buttonText='Add to Cart'
                   buttonFunction={props.addToCart}
                   />
                )}
            )
        
    return (
        <main className='record--list--page'>
            <header style={props.themeStyles} className='record--list--header'>
                <h1 className='page--header'>Records</h1>
                <p className='page--number'>{props.pageNumber}</p>
            </header>
                <div style={props.themeStyles} className='record--list--container'>
                <div className='filter--conatiner'>
                    <Filter
                    resetFilters={props.resetFilters}
                    inputThemeStyles={props.inputThemeStyles} 
                    changeSortBy={props.changeSortBy}
                    genreFilter={props.genreFilter}
                    selectGenre={props.selectGenre}
                    changeSearchParams={props.changeSearchParams}
                    />
                </div>
                <div className='record--container'>
                    {mappedData}
                </div>
                <div className='page--number--container'>
                    {pageNumberData}
                </div>            
            </div>
        </main>

    )
}