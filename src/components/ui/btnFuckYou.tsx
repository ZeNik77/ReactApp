import { useState } from 'react'


const BtnFuckYou = () => {
    const [fu, setFu] = useState("Click me!");
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <button onClick={() => setFu(prev => prev + "\nFuck you!")}>{fu}</button>
        </div>
    );
};

export default BtnFuckYou;