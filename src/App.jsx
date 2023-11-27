import React from "react"
import ProfileData from "./ProfileData"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App(){
  return(

    <div className="bg-gray-800 h-40 align-content-center mx-10">

<ProfileData/>
    </div>
  )
}

export default App