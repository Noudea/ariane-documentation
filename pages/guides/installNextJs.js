import Highlight from 'react-highlight'

const installNextJs = () => {
    return (
        <>
        <style jsx>{`
            a {

            }
            
            `}</style>
            <h1> Installation pour Next.js</h1>
            <h2>Installation de Next.js :</h2>
            <p>Si vous n'avez pas encore installé Next.js</p>
            <Highlight className="md">{`npx create-next-app`}</Highlight>
            <p>Pour plus d'informations veuillez consulter la <a href='https://nextjs.org/docs' target="_blank">documentation de Next.js</a>.</p>
            <h2>Installer next-ariane :</h2>
            <Highlight className="md">{`npm install next-ariane`}</Highlight>
            <p>Une fois le package installé, modifiez le fichier _app.js se trouvant dans pages/_app.js comme ceci : </p>
            <Highlight className="react">{`import { GeneralProvider } from 'next-ariane'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <GeneralProvider>
        <Component {...pageProps} />
    </GeneralProvider>
  ) 
  
}
export default MyApp`}</Highlight>
            <h2>Exemples : </h2>
            <p>Coming Soon</p>
        </>
    )
}

export default installNextJs
