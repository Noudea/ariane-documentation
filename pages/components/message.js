import { Container, Button , Table, Tooltip , Message } from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const message = () => {

        const data = [
        {
            props : 'data',
            type : "string",
            default : 'undefined',
            description : 'le texte du tooltip',
            exemple : "<Tooltip textContent='Mon Tooltip'>{children}</Tooltip>"
        }
    ]

    const scope = {Message}
        const codeDefault = `

    `

    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>Tooltip</h1>
                <p>Un tooltip simple qui s'affiche sur la droite de son enfant</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {Tooltip} from 'next-ariane

<Tooltip textContent="Mon Tooltip">
    {children}
</Tooltip>`}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default message
