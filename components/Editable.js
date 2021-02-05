import React, { useState } from 'react';


// const defaultEditTrigger = (<span>&nbsp;&nbsp;</span>);

export const Editable = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [showEditMode, setShowEditMode] = useState(false);

    const defaultEditTrigger = <span>&nbsp;&nbsp;<i class="fas fa-pencil-alt" onClick={() => setEditMode(!editMode)}></i></span>;

    let display;
    if (!editMode) {
        display = (
            <>
                {props.children }
                {showEditMode && (props.editTrigger || defaultEditTrigger)}
            </>
            
        );
    } else {
        display = (
            <>
                {props.children }
                {showEditMode && props.saveChanges}
            </>
        );
    }
    

    if (props.inline) {
        return (
            <span onMouseEnter={() => setShowEditMode(true)} onMouseLeave={() => setShowEditMode(false)}>
                {display}
            </span>
        );
    } else {
        return (
            <div onMouseEnter={() => setShowEditMode(true)} onMouseLeave={() => setShowEditMode(false)}>
                {display}
            </div>
        )

    }
}

