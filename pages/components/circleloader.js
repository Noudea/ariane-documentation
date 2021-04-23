import {
    Container,
    CircleLoader,
    Divider,
    ThemeColors,
    ThemeContext,
    Flex,
    Table,
} from 'next-ariane'
import { useContext } from 'react'
import Highlight from 'react-highlight'
import Preview from '../../components/preview'

const circleloader = () => {

    const data = [
        {
            props : 'size',
            type : "enum['xs','sm','md','lg','xl']",
            default : 'md',
            description : 'set la taille du composant',
            exemple : "<CircleLoader size='xs'></CircleLoader>"
        },
        {
            props : 'thin,default,bold',
            type : 'boolean',
            default : 'default',
            description : 'set l\'épaisseur du loader',
            exemple : '<CircleLoader bold></CircleLoader>'
        },
        {
            props : 'speed',
            type : "enum['slow','normal','fast']",
            default : 'normal',
            description : 'set la vitesse du loader',
            exemple : "<CircleLoader speed='slow'></CircleLoader>"
        },
        {
            props : 'color',
            type : 'string',
            default : 'theme based',
            description : 'set le couleur du loader',
            exemple : '<CircleLoader color=\'#00b7ff\'></CircleLoader>'
        },
    ]

    const scope = { CircleLoader , Flex , Divider }
    const codeDefault = `
        <CircleLoader></CircleLoader>
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
                <CircleLoader size='xs'></CircleLoader>
                <p>xs</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader size='sm'></CircleLoader>
                <p>sm</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader size='md'></CircleLoader>
                <p>md</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader size='lg'></CircleLoader>
                <p>lg</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader size='xl'></CircleLoader>
                <p>xl</p>
            </Flex>
        </Flex>
    </>
    `
    const codeStrokeWidth = `
    <>
        <style jsx>{\` 
            p {
                margin-left : 10px;
            }
        \`}</style>

        <Flex flexDirection='column'>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader thin size='large'></CircleLoader>
                <p>thin</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader size='large'></CircleLoader>
                <p>default</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader bold size='large'></CircleLoader>
                <p>bold</p>
            </Flex>
        </Flex>
    </>
    `
    const codeSpeed = `
    <>
        <style jsx>{\` 
            p {
                margin-left : 10px;
            }
        \`}</style>

        <Flex flexDirection='column'>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader speed='slow' size='large'></CircleLoader>
                <p>slow</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader speed='normal' size='large'></CircleLoader>
                <p>normal</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader speed='fast' size='large'></CircleLoader>
                <p>fast</p>
            </Flex>
        </Flex>
    </>
    `
    const codeColor = `
    <>
        <style jsx>{\` 
            p {
                margin-left : 10px;
            }
        \`}</style>

        <Flex flexDirection='column'>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader color='red' large></CircleLoader>
                <p>css colors</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader color='#00b7ff'large></CircleLoader>
                <p>hex</p>
            </Flex>
        </Flex>
    </>
    `
    return (
        <>
            <style jsx>{`
            `}</style>
            <Container>
                <h1>CircleLoader</h1>
                <p>Un composant qui indique un loading state.</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {CircleLoader} from 'next-ariane

<CircleLoader></CircleLoader>`}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Tailles</h3>
                <Preview code={codeSize} scope={scope}></Preview>
                <h3>Epaisseurs</h3>
                <Preview code={codeStrokeWidth} scope={scope}></Preview>
                <h3>Vitesses</h3>
                <Preview code={codeSpeed} scope={scope}></Preview>
                <h3>Couleurs custom</h3>
                <Preview code={codeColor} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default circleloader
