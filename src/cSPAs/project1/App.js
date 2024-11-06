import Card from './components/Card.js';
import Card2 from './components/Card2.js';
import Card3 from './components/Card3.js';
import Button from './components/Button.js';
import Button2 from './components/Button2.js';

function App() {
    return (
    <>
        <Card
            title="Hello World!"
            content="This is a simple card component."
        />

        <Card2
            title="Hey!"
            content="This is another simple card component with more content."
        />

        <Card3>
            <h2>This is a third card component.</h2>
            <p>It can contain any kind of children components.</p>
        </Card3>


        <Button label='Clica aqui'/>
        <Button />
        <Button2 />
    </>
    )
}

export default App;
