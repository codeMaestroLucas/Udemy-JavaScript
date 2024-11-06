import Card from './components/Card.js';
import Button from './components/Button.js';

function App() {
    return (
    <>
        <Card
            title="Hello World!"
            content="This is a simple card component."
        />

        <Card
            title="Outro Card!"
            bgColor="orange"
        />

        <Button label='Clica aqui'/>
        <Button />
    </>
    )
}

export default App;
