import React, { useState } from 'react'
import '../index.css'
import AddList from './AddList'
import List from './List'

const Content = () => {
    const [lists,setLists] = useState([]);

    const addList = (list) => {
        list.id = Math.random()
        list.tasks = [];
        let listsNew = [...lists,list]
        setLists(listsNew)
    }
    const resLists = (lists.length) ? (
        lists.map(list=>{
            return(
                <List
                key={list.id}
                list={list}
                />
            )
        })
    ) : (
        <p></p>
    )
    return (
        <div className='content'>
            <div className="conteiner">
            {resLists}
            <AddList
                addList={addList}
            />
            </div>
        </div>
    )
}

export default Content
