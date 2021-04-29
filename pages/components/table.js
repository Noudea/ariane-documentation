import { Container, Button, Table, Tooltip } from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const table = () => {
    const data = [
        {
            props: 'data',
            type: '[array]',
            default: 'undefined',
            description: 'tableau des données',
            exemple: "<CircleLoader size='xs'></CircleLoader>",
        },
    ]

    const tableData = [
        {
            Nom: 'Potter',
            Prénom: 'Harry',
            Age: 'undefined',
            Ville: 'Poudlard',
        },
        {
            Nom: 'Granger',
            Prénom: 'Hermione',
            Age: 'undefined',
            Ville: 'Poudlard',
        },
        {
            Nom: 'Weasley',
            Prénom: 'Ron',
            Age: 'undefined',
            Ville: 'Poudlard',
        },
        {
            Nom: 'Dumbledor',
            Prénom: 'Albus',
            Age: 'undefined',
            Ville: 'Poudlard',
        },
    ]

    const scope = { Table, tableData }
    const codeDefault = `
<Table data={tableData}></Table>
    `
    return (
        <>
            <style jsx>{``}</style>
            <Container>
                <h1>Table</h1>
                <p>Un tableau de données</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import {Table} from 'next-ariane

const data = [
    {
        Nom : 'Potter',
        Prénom : 'Harry',
        Age : 'undefined',
        Ville : 'Poudlard'
    },
    {
        Nom : 'Dumbledor',
        Prénom : 'Albus',
        Age : 'undefined',
        Ville : 'Poudlard'
    },
    {
        Nom: 'Granger',
        Prénom: 'Hermione',
        Age: 'undefined',
        Ville: 'Poudlard',
    },
    {
        Nom: 'Weasley',
        Prénom: 'Ron',
        Age: 'undefined',
        Ville: 'Poudlard',
    }
]

<Table data={data}></Table>`}
                </Highlight>
                <h3>Format des données</h3>
                <p>Le schéma des données est formé ainsi : </p>
                <Highlight>{`
const tableData = [
    {
        Nom : 'Potter',
        Prénom : 'Harry',
        Age : 'undefined',
        Ville : 'Poudlard'
    },
    {
        Nom : 'Dumbledor',
        Prénom : 'Albus',
        Age : 'undefined',
        Ville : 'Poudlard'
    },
    {
        Nom: 'Granger',
        Prénom: 'Hermione',
        Age: 'undefined',
        Ville: 'Poudlard',
    },
    {
        Nom: 'Weasley',
        Prénom: 'Ron',
        Age: 'undefined',
        Ville: 'Poudlard',
    }
]
                
                `}</Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default table
