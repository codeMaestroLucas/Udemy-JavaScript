import './App.css';
import { useState } from 'react';

const Button = ({ color, onClick, isClicked }) => {
    return (
        <button
            style={{
                backgroundColor: isClicked ? 'white' : color,
                border: isClicked ? '3px solid black' : 'none'
            }}
            className="card"
            onClick={onClick}
        >
            {color}
        </button>
    );
}

const App = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    const [clickedColor, setClickedColor] = useState(null);

    const handleClick = (color) => {
        if (clickedColor === color) { // To remove the Bg if the button was already active
            setClickedColor(null);
        } else {
            
            setClickedColor(color);
        }
    }

    return (
        <div
            className='options'
            style={{ backgroundColor: clickedColor || 'white' }}
        >
            {colors.map((color) => (
                <Button
                    key={color}
                    color={color}
                    onClick={() => handleClick(color)}
                    isClicked={clickedColor === color}
                />
            ))}
        </div>
    );
}

export default App;
