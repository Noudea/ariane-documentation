
import { GeneralProvider } from 'next-ariane'
import SideLayout from '../layout/SideLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {



  return(
    <GeneralProvider>
        <SideLayout>
            <link rel="stylesheet" href="/styles/dracula.css"></link>
            <Component {...pageProps} />
        </SideLayout>
    </GeneralProvider>
  ) 
  
}

export default MyApp
