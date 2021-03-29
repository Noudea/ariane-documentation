import { IconButton, LightDarkSwitch, ThemeColors, ThemeContext } from 'next-arianne'
import { useContext, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula';

const Preview = (props) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]
    const [isOpen, setIsOpen] = useState(false)
    const onClick = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        if (!isOpen) {
            setIsOpen(true)
        }
    }
    return (
        <div className="container">
            <style jsx>{`
                .container {
                    padding: 20px;
                    border:1px dashed ${colors.contrast};
                    border-radius: 6px;
                    position: relative;
                }
                .container:hover {
                    border:1px dashed ${colors.accent};
                }
                .buttonContainer {
                    position: absolute;
                    display:flex;
                    right: 20px;
                    bottom: 20px;
                    z-index:10;
                }
                .buttonContainer > div {
                    margin:5px;
                }
                .editor {
                    margin-top : 20px;
                }
            `}</style>
            <LiveProvider theme={dracula} code={props.code} scope={props.scope}>
                <LivePreview />
                <div className="buttonContainer">
                    <div>
                        <LightDarkSwitch rounded medium ></LightDarkSwitch>
                    </div>
                    <div>
                        <IconButton
                            onClick={onClick}
                            rounded
                            medium
                            iconSrc="/svg/code.svg"
                        ></IconButton>
                    </div>
                </div>
                {isOpen ? (
                    <div className='editor'>
                        <LiveEditor />
                        <LiveError />
                    </div>
                ) : null}
            </LiveProvider>
        </div>
    )
}

export default Preview
