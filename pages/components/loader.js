import {
    Container,
    CircleLoader,
    Divider,
    ThemeColors,
    ThemeContext,
    Flex,
    Table,
} from 'next-arianne'
import { useContext } from 'react'
import Highlight from 'react-highlight'
import Preview from '../../components/preview'

const loader = () => {


    // const data = [
    //     {
    //         property: 'xsmall',
    //         type: 'boolean',
    //         default: 'false',
    //         description: 'set la taille du composant a xsmall'
    //     },
    //     {
    //         property: 'small',
    //         type: 'boolean',
    //         default: 'false',
    //         description: 'set la taille du composant a small'
    //     },
    //     {
    //         property: 'medium',
    //         type: 'boolean',
    //         default: 'true',
    //         description: 'set la taille du composant a medium'
    //     },
    //     {
    //         property: 'large',
    //         type: 'boolean',
    //         default: 'false',
    //         description: 'set la taille du composant a large'
    //     },
    //     {
    //         property: 'xlarge',
    //         type: 'boolean',
    //         default: 'false',
    //         description: 'set la taille du composant a xlarge'
    //     }
        
    // ]

    const data = [
        {
            property : 'size',
            props : 'xsmall,small,medium,large,xlarge',
            type : 'boolean',
            default : 'medium',
            description : 'set la taille du composant',
            exemple : '<CircleLoader small></CircleLoader>'
        },
        {
            property : 'épaisseur',
            props : 'thin,default,bold',
            type : 'boolean',
            default : 'default',
            description : 'set l\'épaisseur du loader',
            exemple : '<CircleLoader bold></CircleLoader>'
        },
        {
            property : 'vitesse',
            props : 'slow,normal,fast',
            type : 'boolean',
            default : 'normal',
            description : 'set la vitesse du loader',
            exemple : '<CircleLoader fast></CircleLoader>'
        },
        {
            property : 'couleur',
            props : 'color',
            type : 'string',
            default : 'theme based',
            description : 'set le couleur du loader',
            exemple : '<CircleLoader color=\'#00b7ff\'></CircleLoader>'
        },
    ]

    const colors = ThemeColors[useContext(ThemeContext).theme]
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
                <CircleLoader xsmall></CircleLoader>
                <p>xsmall</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader small></CircleLoader>
                <p>small</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader medium></CircleLoader>
                <p>medium</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader large></CircleLoader>
                <p>large</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader xlarge></CircleLoader>
                <p>xlarge</p>
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
                <CircleLoader thin large></CircleLoader>
                <p>thin</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader large></CircleLoader>
                <p>default</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader bold large></CircleLoader>
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
                <CircleLoader slow large></CircleLoader>
                <p>slow</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader normal large></CircleLoader>
                <p>normal</p>
            </Flex>
            <Divider margin='10'></Divider>
            <Flex flexDirection='row' alignItems='center'>
                <CircleLoader fast large></CircleLoader>
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
                .container {
                    background-color: ${colors.main};
                    padding: 20px;
                    border-radius: 6px;
                }
            `}</style>
            <Container>
                <h1>Loader</h1>
                <p>Un composant qui indique un loading state.</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import CircleLoader from 'next-arianne

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

export default loader
