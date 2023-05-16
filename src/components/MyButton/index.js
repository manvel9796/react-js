function MyButton({title,handleClik}){
    return(
        <button onClick={handleClik}>{title}</button>
    )
}

export default MyButton