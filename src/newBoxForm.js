import { useState } from 'react';

const NewBoxForm = ({addNewSquare}) => {

    const [formData, setFormData ] = useState({
        color: ' ',
        height: '',
        width: ''
    })
    
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addNewSquare({...formData})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input 
                id="color"
                name="color" 
                type="text"
                value={formData.color}
                onChange={handleChange}
            />
            
            <label htmlFor="height">Height</label>
            <input 
                id="height" 
                name="height" 
                type="number"
                value={formData.height}
                onChange={handleChange}
                 />
            <label htmlFor="width">Width</label>
            <input 
                id="width" 
                name="width" 
                type="number" 
                value={formData.width}
                onChange={handleChange}
                />
            <button>Add new color</button>
        </form>
    )
}

export default NewBoxForm;