import {
    Container,
    List,
    Divider,
    Table
} from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'


//props
// data
//searchable
// xsmal small medium large
// title
// ordered


const liste = () => {
    const scope = { List , Divider }

        const data = [
        {
            props : 'size',
            type : "enum['xs','sm','md','lg']",
            default : 'medium',
            description : 'set la taille du composant',
            exemple : '<List small></List>'
        },
        {
            props : 'data',
            type : 'array',
            default : 'empty',
            description : 'les données de la liste',
            exemple : "<List data=['1','2','3']></List>"
        },
        {
            props : 'searchable',
            type : 'boolean',
            default : 'false',
            description : 'permet de rechercher dans la liste avec un input',
            exemple : '<List searchable></List>'
        },
        {
            props : 'ordered',
            type : 'boolean',
            default : 'false',
            description : 'rajoute les puces à chiffre à la liste',
            exemple : '<List ordered></List>'
        },
    ]

    const codeDefault = `
        <List 
            title='To-Do List' 
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
    `
    const codeSize = `
    <>
        <h4>xsmall</h4>

        <List 
            title='To-Do List'
            xsmall
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
        <h4>small</h4>

        <List 
            title='To-Do List'
            small
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
        <h4>medium</h4>

        <List 
            title='To-Do List'
            medium
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
        <h4>large</h4>

        <List 
            title='To-Do List'
            large
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
    </>
    `
    const codeSearch = `
        <List
            searchable
            title='To-Do List' 
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
    `
    const codeOrdered = `
        <List
            ordered
            title='To-Do List' 
            data={['Code','Eat','Sleep','Reapeat']}
        >
        </List>
    `

    return (
        <>
            <Container>
                <h1>SideNavItem</h1>
                <p>
                    Un composant à utiliser avec le composant SideNav, il permet
                    de créer un lien dans la navigation.
                </p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import { List } from 'next-ariane'


<List 
    title='To-Do List' 
    data={['Code','Eat','Sleep','Reapeat']}
></List>                   
                    `}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Tailles</h3>
                <Preview code={codeSize} scope={scope}></Preview>
                <h3>Recherche</h3>
                <Preview code={codeSearch} scope={scope}></Preview>
                <h3>Ordonée</h3>
                <Preview code={codeOrdered} scope={scope}></Preview>
                <h3>Props</h3>
                <Table data={data}></Table>
            </Container>
        </>
    )
}

export default liste
