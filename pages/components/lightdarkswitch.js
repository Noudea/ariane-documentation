import { Container,Table,LightDarkSwitch} from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const lightdarkswitch = () => {

        const data = [
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

    const scope = {LightDarkSwitch}
        const codeDefault = `
<LightDarkSwitch transparent size='medium' ></LightDarkSwitch>
    `

    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>Dark and Light switch</h1>
                <p>Un bouton qui permet de changer entre light thème et dark thème</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {LightDarkSwitch} from 'next-ariane

<LightDarkSwitch transparent size='medium' ></LightDarkSwitch>`}
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

export default lightdarkswitch
