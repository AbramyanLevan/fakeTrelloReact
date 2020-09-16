import React,{useState} from 'react'
import '../index.css'

const AddList = ({addList}) => {
    const [state,setState] = useState({
        content: ''
    })
    const handleChange = (e) => {
        setState({content:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addList(state)
        setState({content:''})

    }
    return (
        <div className='add-list' onSubmit={handleSubmit}>
            <form>
                <input type="text" placeholder='New List' onChange={handleChange} value={state.content} />
            </form>
        </div>
        
    )
}

export default AddList
