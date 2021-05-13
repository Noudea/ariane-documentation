import { Button } from 'next-ariane'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <style jsx>{`

            .container {
                width:100%;
                height:85vh;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items : center;
            }
            .ButtonContainer {
                display:flex;
            }
            .buttonWrapper {
                margin-right:10px;
            }

            .label {
            }
            h1 {
                font-size : 60px;
                margin-bottom : 0px;
            }

            span {
                color:#f05151;
            }
            `}</style>
            <div className='container'>
                <h1>Bienvenue sur <span>Ariane</span></h1>
                <div className='label'>
                    <h3>Une librarie de composant pour Next.js</h3>
                </div>
                <div className='ButtonContainer'>
                    <div className='buttonWrapper'>
                       <Button color='#f05151' bold textColor='#f05151' outlined href='#'>Composants</Button>
                    </div>
                    <div className='buttonWrapper'>
                        <Button color='#f05151'  bold textColor='white' href='/guides/installNextJs'>Commencer</Button>
                    </div>
                </div>
            </div>
    </>
  )
}
