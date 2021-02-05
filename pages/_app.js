import '../styles/main.scss'
import React from 'react'
import {ProjectProvider} from '../context/ProjectContext'


function MyApp({ Component, pageProps }) {

  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

export default MyApp
