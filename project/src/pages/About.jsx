import { useState } from 'react';
 function About() {
    const [isOn , setIsOn] = useState(false);
     const [tours, setTours] = useState([]);
     console.log({ isOn, tours });


// funct no args
     const handleClick = () => {
         const newIsOn = !isOn
         setIsOn(newIsOn);
     };

     //funct
     const handleClickArgs = isClicked => {
         setIsOn(isClicked);  
     };
    return (
        <div className='flex items-center justify-center h-screen flex-col gap-2'>
            <button onClick={handleClick} className='bg-amber-300'>
                {isOn ? 'Bat' : 'Tat'}
            </button>
            <button
                onClick={() =>handleClickArgs(!isOn)} className='bg-amber-300' >
                {isOn ? 'Bat' : 'Tat'}
            </button>
        </div>
    );
}

export default About