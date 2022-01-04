import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

    const [title, setTitle] = useState(props.title)
    const [editMode, setEditMode] = useState(false)

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const activeEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }

    return editMode
        ? <input value={title} onChange={onChangeTitle} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activeEditMode}>{props.title}</span>
}