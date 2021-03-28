import { useEffect, useState, useContext } from 'react'
import {NavBar,Tooltip,IconButton,SideNav,SideNavContainer,SideNavHeader,SideNavItem, ThemeColors, ThemeContext , Divider , SideNavDropdown, NavContext, GlobalStyle, LightDarkSwitch} from 'next-arianne'

const SideLayout = ({ children, ...props }) => {
    const { sideNavOpen, setSideNavOpen } = useContext(NavContext);
    const [navExpand, setNavExpand] = useState(false)
    const [marginLeft, setMarginLeft] = useState(84)
    const [nav1, setNav1] = useState(true)
    const [nav2, setNav2] = useState(false)
    const [nav3, setNav3] = useState(false)
    const colors = ThemeColors[useContext(ThemeContext).theme]


    useEffect(() => {},[navExpand])

    const expandNav = () => {
        setSideNavOpen(true)
    }

    const openNav1 = () => {
        expandNav()
        setNav2(false)
        setNav3(false)
        setNav1(true)
    }
    const openNav2 = () => {
        expandNav()
        setNav1(false)
        setNav3(false)
        setNav2(true)
    }
    const openNav3 = () => {
        expandNav()
        setNav1(false)
        setNav2(false)
        setNav3(true)
    }

    return (
        <>
            <style jsx>{`
                .main {
                    margin-left : ${marginLeft}px;
                }
                h4 {
                    padding: 0px 20px;
                    margin:10px 0px;
                }
                `}</style>
            <NavBar alignement="vertical">
                <Tooltip textContent="this is a toolTip">
                    <IconButton
                        transparent
                        medium
                        iconSrc="/svg/book-open.svg"
                        onClick={openNav1}
                    ></IconButton>
                </Tooltip>
                <IconButton
                    transparent
                    medium
                    iconSrc="/svg/cube.svg"
                    onClick={openNav2}
                ></IconButton>
                <IconButton
                    transparent
                    medium
                    iconSrc="/svg/bell.svg"
                    onClick={openNav3}
                ></IconButton>
                <LightDarkSwitch transparent medium ></LightDarkSwitch>
                <SideNav isOpen={navExpand}  targetedClass='main'>
                    {nav1 ?
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
                        : null}
                    {nav2 ?
                    <SideNavContainer>
                            <SideNavHeader >Composants</SideNavHeader>
                            <h4># Général</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/loader'  width='100%'>
                                Loader
                            </SideNavItem>
                            <SideNavItem href='/components/tooltip'  width='100%'>
                                ToolTip
                            </SideNavItem>
                            <SideNavDropdown textContent='Button' width='100%'>
                                <SideNavItem href='/components/button'  width='100%'>
                                    Button
                                </SideNavItem>
                                <SideNavItem href='/components/iconbutton'  width='100%'>
                                    IconButton
                                </SideNavItem>
                            </SideNavDropdown>
                            <SideNavItem href='/components/divider'  width='100%'>
                                Divider
                            </SideNavItem>
                            <h4># Navigation</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/navbar'  width='100%'>
                                NavBar
                            </SideNavItem>
                            <SideNavDropdown textContent='SideNav'>
                                <SideNavItem href='/components/sidenav'  width='100%'>
                                    SideNav
                                </SideNavItem>
                                <SideNavItem href='/components/sidenavcontainer'  width='100%'>
                                    SideNavContainer
                                </SideNavItem>
                                <SideNavItem href='/components/sidenavheader'  width='100%'>
                                    SideNavHeader
                                </SideNavItem>
                                <SideNavItem href='/components/sidenavitem'  width='100%'>
                                    SideNavItem
                                </SideNavItem>
                                <SideNavItem href='/components/sidenavdropdown'  width='100%'>
                                    SideNavDropDown
                                </SideNavItem>
                            </SideNavDropdown>
                            <SideNavItem href='/components/dropdown'  width='100%'>
                                DropDown
                            </SideNavItem>
                            <h4># Données</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/table'  width='100%'>
                                Table
                            </SideNavItem>
                            <SideNavItem href='/components/liste'  width='100%'>
                                Liste
                            </SideNavItem>
                           <SideNavItem href='/components/avatar'  width='100%'>
                                Avatar
                            </SideNavItem>
                            <SideNavItem href='/components/tag'  width='100%'>
                                Tag
                            </SideNavItem>
                            <h4># Providers</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/generalprovider'  width='100%'>
                                General Provider
                            </SideNavItem>
                            <SideNavItem href='/components/themeprovider'  width='100%'>
                                Theme Provider
                            </SideNavItem>
                           <SideNavItem href='/components/navprovider'  width='100%'>
                                Navigation Provider
                            </SideNavItem>
                        </SideNavContainer>
                    : null}
                    {nav3 ? <p>Nav3</p> : null}
                </SideNav>
            </NavBar>
                <GlobalStyle colors = {colors}/>
                <main className='main'>{children}</main>
            {/* mettre le footer */}
        </>
    )
}

export default SideLayout
