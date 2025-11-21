import { useState } from 'react';
 function About() {
    const [isOn , setIsOn] = useState(false);
     const [tours, setTour] = useState([]);
     console.log({ isOn, tours });
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page of our application.</p>
        </div>
    );
}

export default About