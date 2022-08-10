import React from 'react';
import './App.css'
import AppRouter from "./navigation/AppRouter";
import {ServiceManager} from "./manager/ServiceManager";
import {PresentationManager} from "./manager/PresentationManager";

function App() {
    const serviceManager = ServiceManager();
    const presentationManager = PresentationManager(serviceManager);
    return (
        <AppRouter presentationManager={presentationManager}/>
    );
}

export default App;
