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
    ]

    const codeDefault = `
<Button>Mon Boutton</Button>
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
    <Button customCss='background-color : red; width:100px; border-radius :20px;text-align:center;color:white;font-weight:600;display:flex;justify-content:center;'>Outlined</Button>
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
