import { Container, Table , SideNav , SideNavContainer , SideNavHeader , SideNavItem , NavBar } from "next-arianne"
import Highlight from "react-highlight"
import Preview from "../../components/preview"


const sidenav = () => {

    //isOpen 
    //targetedClass
    const scope = { SideNav , SideNavContainer , SideNavHeader , SideNavItem , NavBar}

    const codeDefault = `
    <>
    <style jsx>{\` 
        .test {
            position:relative;
            perspective : 1px;
            height:500px;
        }
    \`}</style>
    <div className='test'>
    <NavBar alignement="vertical">
        <SideNav isOpen={true}  targetedClass='main'>
            <SideNavContainer>
                <SideNavHeader >Guides</SideNavHeader>
                <SideNavItem href='/guides/intro'  width='100%'>
                    Introduction
                </SideNavItem>
                <SideNavItem href='/guides/installNextJs'  width='100%'>
                    Installation pour Next.JS
                </SideNavItem>
                <SideNavItem href='/guides/installReact'  width='100%'>
                    Installation pour React
                </SideNavItem>
                <SideNavItem href='/guides/theming'  width='100%'>
                    Theming
                </SideNavItem>
            </SideNavContainer>
        </SideNav>
    </NavBar>
    </div>
    </>
    
    `
    return (
        <>
            <Container>
                <h1>Loader</h1>
                <p>Un composant qui indique un loading state.</p>
                <h2>Utilisation</h2>
                <Highlight className="javascript">
                    {"import SideNav from 'next-arianne'"}
                </Highlight>
                <h2>Exemples</h2>
                <h3>Default</h3>
                <Preview code={codeDefault} scope={scope}></Preview>
                <h3>Tailles</h3>
                <h3>Epaisseurs</h3>
                <h3>Vitesses</h3>
                <h3>Couleurs custom</h3>
                <h3>Props</h3>
            </Container>
        </>
    )
}

export default sidenav
