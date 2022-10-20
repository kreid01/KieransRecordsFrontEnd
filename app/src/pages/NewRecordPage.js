import React from 'react';
import NewRecordForm from '../features/NewRecordPage/NewRecordForm'
import NewPreviewRecord from '../features/NewRecordPage/NewRecordPreview'

export default function NewRecord(props) {

    return (
        <div className='new--record--page' style={props.themeStyles}>
        <NewRecordForm 
        setNewRecord={props.setNewRecord}
        postRecord={props.postRecord}
        handleChange={props.handleChange}
        inputThemeStyles={props.inputThemeStyles}
        newRecord={props.newRecord}
        />
        <NewPreviewRecord
        newRecord={props.newRecord}
        />
        </div>
    )
}