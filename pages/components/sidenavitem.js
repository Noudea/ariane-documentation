import {
    Container,
    Table,
    SideNav,
    SideNavContainer,
    SideNavHeader,
    SideNavItem,
    NavBar,
} from 'next-ariane'
import Highlight from 'react-highlight'
import Preview from '../../components/Preview'

const sidenavitem = () => {
    //width
    //color
    //href
    //rajouter bold
    const scope = {
        SideNav,
        SideNavContainer,
        SideNavHeader,
        SideNavItem,
        NavBar,
    }

    const codeDefault = `
    <>
    <style jsx>{\` 
        .holder {
            height:300px;
            width:300px;
        }
    \`}</style>
    <div className='holder'>
        <SideNavItem href='#'  width='100%'>
            Introduction
        </SideNavItem>
        <SideNavItem href='#'  width='100%'>
            Installation pour Next.JS
        </SideNavItem>
        <SideNavItem href='#'  width='100%'>
            Installation pour React
        </SideNavItem>
        <SideNavItem href='#'  width='100%'>
            Theming
        </SideNavItem>
    </div>
    </>
    `
    const codeSize = `
    <>
    <style jsx>{\` 
        .holder {
            height:300px;
            width:300px;
        }
    \`}</style>
    <div className='holder'>
        <SideNavItem href='#'  width='50%'>
            Introduction
        </SideNavItem>
        <SideNavItem href='#'  width='100px'>
            Installation pour Next.JS
        </SideNavItem>
        <SideNavItem href='#'  width='200px'>
            Installation pour React
        </SideNavItem>
        <SideNavItem href='#'  width='80%'>
            Theming
        </SideNavItem>
    </div>
    </>
    `

    const codeColors = `
    <>
    <style jsx>{\` 
        .holder {
            height:300px;
            width:300px;
        }
    \`}</style>
    <div className='holder'>
        <SideNavItem href='#' color='red'>
            Introduction
        </SideNavItem>
        <SideNavItem href='#'  color='green'>
            Installation pour Next.JS
        </SideNavItem>
        <SideNavItem href='#'  width='100%'>
            Installation pour React
        </SideNavItem>
        <SideNavItem href='#'  width='100%'>
            Theming
        </SideNavItem>
    </div>
    </>
    `





    return (
        <>
            <Container>
                <h1>SideNavItem</h1>
                <p>Un composant à utiliser avec le composant SideNav, il permet de créer un lien dans la navigation.</p>
                <h2>Utilisation</h2>
                <Highlight className="react">
                    {`import SideNavItem from 'next-ariane'


<SideNavItem href='/monlien'>monlien</SideNavItem>                    
                    `}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Tailles</h3>
                <Preview code={codeSize} scope={scope}></Preview>
                <h3>Couleurs custom</h3>
                <Preview code={codeColors} scope={scope}></Preview>
                <h3>Props</h3>
            </Container>
        </>
    )
}

export default sidenavitem
