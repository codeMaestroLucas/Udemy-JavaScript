import './List.css'

const ListItem = (props) => {
    console.log(props.index)
    return <li className='li'>{props.animal}</li>
}


const List = (props) => {
    return (
        <ul className='list-of-animals'>
            {props.animals.map(
                (animal) => {
                return <ListItem key={animal} animal={animal} />
                }
            )}
        </ul>
    )
}

export default List;
