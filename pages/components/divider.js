import { Container , Table , Divider} from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const divider = () => {

        const data = [
        {
            props : 'thick',
            type : "enum['thin','bold']",
            default : 'undefined',
            description : "l'épaisseur du divider",
            exemple : "<Divider thin></Divider>"
        },
        {
            props : 'thickness',
            type : "int",
            default : '1',
            description : "l'épaisseur du divider",
            exemple : "<Divider thickness='3'></Divider>"
        },
        {
            props : 'width',
            type : "string",
            default : '100%',
            description : "la largeur du divider",
            exemple : "<Divider width='350px'></Divider>"
        },
        {
            props : 'margin',
            type : "string",
            default : '100%',
            description : "la marge au dessus et en dessous du divider",
            exemple : "<Divider margin='10'"
        }
    ]

    const scope = {Divider}
        const codeDefault = `
<Divider></Divider>
    `
    const codeEpaisseur = `<>
    <Divider thin></Divider>
    <Divider bold></Divider>
    <Divider thickness='3'></Divider>
    <Divider thickness='10'></Divider>
</>`
    const codeWidth = `
<>
    <Divider width='150px'></Divider>
    <Divider width='350px'></Divider>
    <Divider width='50%'></Divider>
    <Divider width='100%'></Divider>
</>    
`

    const codeMargin = `
<>
    <Divider margin='20'></Divider>
    <Divider margin='150'></Divider>
    <Divider margin='10'></Divider>
</>    
`

    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>Divider</h1>
                <p>Un divider pour séparer du contenu</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {Divider} from 'next-ariane

<Divider margin='5' thin width='85%'></Divider>`}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Epaisseur</h3>
                <Preview code={codeEpaisseur} scope={scope}></Preview>
                <h3>Width</h3>
                <Preview code={codeWidth} scope={scope}></Preview>
                <h3>Margin</h3>
                <Preview code={codeMargin} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default divider
