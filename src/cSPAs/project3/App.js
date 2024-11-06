import List from './components/List';


function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <>
            <h1 className='title'>Animal List</h1>
            <List animals={animals}/>
        </>
    )
}

export default App;
