import React from 'react';
import Card from './components/Card';

function App() {
    return(
        <Card name="John Doe" description="Software Engineer" interests={["Coding", "Music", "Gaming"]} />
    )
}

export default App
