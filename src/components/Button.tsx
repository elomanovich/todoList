import React from 'react'
import {FilterValuesType} from "../App";
import s from './Button.module.css'

type propsType = {
    name: FilterValuesType
    callback: (todoListID: string, value: FilterValuesType) => void
    todoListId: string
    filter:FilterValuesType
}

export const Button = (props:propsType) => {
    const onClickHandler = () => {
        props.callback(props.todoListId, props.name)
    }

    return (
        <button
            className={props.filter === props.name ? s.activeFilter : ''}
        onClick={onClickHandler}
        >{props.name}</button>
    )
}