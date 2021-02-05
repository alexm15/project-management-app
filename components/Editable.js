import React, { useState } from 'react';


// const defaultEditTrigger = (<span>&nbsp;&nbsp;</span>);

export const Editable = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [showEditMode, setShowEditMode] = useState(false);

    const defaultEditTrigger = <span style={{display: 'inline'}}>&nbsp;&nbsp;<i class="fas fa-pencil-alt" onClick={() => setEditMode(!editMode)}></i></span>;

    let display;
    if (!editMode) {
        display = (
            <>
                { props.header }
                { showEditMode && (props.editTrigger || defaultEditTrigger) }
                { props.children }
            </>
            
        );
    } else {
        display = (
            <>
                { props.editableHeader || props.header }
                { showEditMode && props.saveChanges }
                { props.children }
            </>
        );
    }
    

    if (props.inline) {
        return (
            <span onMouseEnter={() => setShowEditMode(true)} onMouseLeave={() => setShowEditMode(false)} className={props.style}>
                {display}
            </span>
        );
    } else {
        return (
            <div onMouseEnter={() => setShowEditMode(true)} onMouseLeave={() => setShowEditMode(false)} className={props.style}>
                {display}
            </div>
        )

    }
}

