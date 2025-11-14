// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // JSX : HTML + JS nam trong return boc trong 1 the bat ky <></>
    const name = "Nguyen Van Anh";
    const studenID = "B20DCCN001";
    const major = "Internet Technology";
    const age = 20;
    return (
        <div className="App">
            <h1 className="text-3xl font-bold text-blue-600">Xin Chao{name}</h1>
            <p className="text-gray-700 text-2xl">{studenID}</p>
            <p className="text-gray-700 text-2xl">{major}</p>
            <h2>
                Thong tin sinh vien
            </h2>
            <p>
                <strong>Ho ten :</strong>{name}
            </p>
            <p>
                <strong>Ma so sinh vien :</strong> {studenID}
            </p>
            <p>
                <strong>Chuyen nganh :</strong> {major}
            </p>
            <p>
                Tuoi : {age +1 } ;
            </p>
            </div>
    );
}

export default App
