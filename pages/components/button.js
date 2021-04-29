import { Container, Button, Divider, Table } from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

//size -- taille
//bold -- style
//outlined --style
//color --colors
//transparent --style
//onClick --
//submit
//accent --colors
//customCss --style
//iconLeft --icons
//iconRight --icons
//iconSrc --icons

const button = () => {
    const scope = { Button, Divider }

    const data = [
        {
            props: 'size',
            type: "enum['xs','sm','md','lg']",
            default: 'md',
            description: 'taille du boutton',
            exemple: "<Button size='md'>medium</Button>",
        },
        {
            props : 'href',
            type : "string",
            default : 'undefined',
            description : 'chemin du lien',
            exemple : "<Button href='#'></Button>"
        },
        {
            props: 'size',
            type: "enum['xs','sm','md','lg']",
            default: 'md',
            description: 'taille du boutton',
            exemple: "<Button size='md'>medium</Button>",
        },
        {
            props: 'bold',
            type: "boolean",
            default: 'false',
            description: 'le texte du bouton est bold',
            exemple: "<Button bold>Bold</Button>",
        },
        {
            props : 'transparent',
            type : 'boolean',
            default : 'false',
            description : 'set le background du bouton transparent',
            exemple : "<Button transparent>Transparent</Button>"
        },
        {
            props: 'outlined',
            type: "boolean",
            default: 'false',
            description: 'style le boutton en outlined',
            exemple: "<Button outlined>Outlined</Button>",
        },
        {
            props: 'customCss',
            type: "inline style / css",
            default: 'undefined',
            description: 'permet de custom le bouton css',
            exemple: "<Button customCss='background-color : red; width:150px;'>Custom CSS</Button>",
        },
        {
            props: 'iconLeft',
            type: "boolean",
            default: 'false',
            description: 'permet de rajouter un icone du coté gauche, à utiliser avec iconSrc',
            exemple: "<Button iconLeft iconSrc='mySvg.svg'>iconLeft</Button>",
        },
        {
            props: 'iconRight',
            type: "boolean",
            default: 'false',
            description: 'permet de rajouter un icone du coté droit, à utiliser avec iconSrc',
            exemple: "<Button iconRight iconSrc='mySvg.svg'>iconLeft</Button>",
        },
        {
            props : 'iconSrc',
            type : "string",
            default : 'undefined',
            description : 'chemin vers le fichier svg ou png',
            exemple : "<Button iconLeft iconSrc='MySvg.svg'>iconLeft</Button>"
        },
    ]

    const codeDefault = `
<Button>Mon Boutton</Button>
    `
    const codeLink = `
<Button href='#'>Mon Boutton Lien</Button>    
    `
    const codeSize = `
<>
    <Button size='xs'>xsmall</Button>
    <Divider margin='10' ></Divider>
    <Button size='sm'>small</Button>
    <Divider margin='10' ></Divider>
    <Button size='md'>medium</Button>
    <Divider margin='10' ></Divider>
    <Button size='lg'>large</Button>
</>
    `
    const codeColor = `
<>
    <Button accent>Accent</Button>
</>
    `
    const codeStyle = `
<>
    <Button bold>Bold</Button>
    <Divider margin='10' ></Divider>
    <Button transparent>Transparent</Button>
    <Divider margin='10' ></Divider>
    <Button outlined>Outlined</Button>
    <Divider margin='10' ></Divider>
    <Button customCss='background-color : red; width:150px; border-radius :20px;text-align:center;color:white;font-weight:600;display:flex;justify-content:center;'>Custom CSS</Button>
</>
    `
    const codeIcons = `
<>
    <Button iconLeft iconSrc='/svg/code.svg'>iconLeft</Button>
        <Divider margin='10' ></Divider>
    <Button iconRight iconSrc='/svg/code.svg'>iconRight</Button>
</>
    `

    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>Button</h1>
                <p>Un composant Boutton.</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {Button} from 'next-arianne

<Button>Mon Button</Button>`}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Link</h3>
                <Preview code={codeLink} scope={scope}></Preview>
                <h3>Tailles</h3>
                <Preview code={codeSize} scope={scope}></Preview>
                <h3>Styles</h3>
                <Preview code={codeStyle} scope={scope}></Preview>
                <h3>Couleurs</h3>
                <Preview code={codeColor} scope={scope}></Preview>
                <h3>Icons</h3>
                <Preview code={codeIcons} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default button
