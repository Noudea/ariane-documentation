import { Container, IconButton , Table, Divider , Flex } from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const iconbutton = () => {

        const data = [
        {
            props : 'iconSrc',
            type : "string",
            default : 'undefined',
            description : 'chemin vers le fichier svg ou png',
            exemple : "<IconButton iconSrc='/svg/heart.svg'></IconButton>"
        },
        {
            props : 'href',
            type : "string",
            default : 'undefined',
            description : 'chemin du lien',
            exemple : "<IconButton href='#' iconSrc='/svg/heart.svg'></IconButton>"
        },
        {
            props: 'size',
            type: "enum['xs','sm','md','lg']",
            default: 'md',
            description: 'taille du boutton',
            exemple: "<IconButton size='md' iconSrc='/svg/heart.svg'></IconButton>",
        },
        {
            props: 'outlined',
            type: "boolean",
            default: 'false',
            description: 'style le boutton en outlined',
            exemple: "<IconButton outlined iconSrc='/svg/heart.svg'></IconButton>",
        },
        {
            props : 'color',
            type : 'string',
            default : 'theme based',
            description : 'set la couleur du boutton',
            exemple : "<IconButton iconSrc='/' color='#00b7ff'></IconButton>"
        },
        {
            props : 'transparent',
            type : 'boolean',
            default : 'false',
            description : 'set le background du bouton transparent',
            exemple : "<IconButton iconSrc='/' transparent></IconButton>"
        },
        {
            props : 'rounded',
            type : 'boolean',
            default : 'false',
            description : 'set la forme du boutton a ronde',
            exemple : "<IconButton iconSrc='/' rounded></IconButton>"
        },
    ]

    const scope = {IconButton , Divider , Flex}
        const codeDefault = `
<IconButton iconSrc='/svg/heart.svg'></IconButton>
    `
        const codeLink = `
<IconButton href='#' iconSrc='/svg/heart.svg'></IconButton>
        `

        const codeSize = `
<>
    <style jsx>{\` 
        p {
            margin-left : 10px;
        }
    \`}</style>

    <Flex flexDirection='column'>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' size='xs'></IconButton>
            <p>xs</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' size='sm'></IconButton>
            <p>sm</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' size='md'></IconButton>
            <p>md</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' size='lg'></IconButton>
            <p>lg</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' size='xl'></IconButton>
            <p>xl</p>
        </Flex>
    </Flex>
</>
        `
        const codeStyle = `
<>
    <style jsx>{\` 
        p {
            margin-left : 10px;
        }
    \`}</style>

    <Flex flexDirection='column'>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton outlined iconSrc='/svg/heart.svg'></IconButton>
            <p>outlined</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton color='red' iconSrc='/svg/heart.svg'></IconButton>
            <p>color</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton iconSrc='/svg/heart.svg' transparent></IconButton>
            <p>transparent</p>
        </Flex>
        <Divider margin='10'></Divider>
        <Flex flexDirection='row' alignItems='center'>
            <IconButton rounded iconSrc='/svg/heart.svg' size='lg'></IconButton>
            <p>rounded</p>
        </Flex>
    </Flex>
</>
        `
    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>IconButton</h1>
                <p>Button with icon.</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {IconButton} from 'next-ariane

<IconButton iconSrc='mySVG.svg'></IconButton>`}
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
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default iconbutton
