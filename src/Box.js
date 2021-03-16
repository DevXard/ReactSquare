const Box = ({ id, color, width, height, removeSquare}) => {
    
    const handleRemove = (id) => {
        removeSquare(id)
    }

    return (
        <div style={{ backgroundColor:`${color}`, height:`${height}px`, width:`${width}px`}}>
            <button onClick={ () => handleRemove(id)}>X</button>
        </div>
    )
}

export default Box;

