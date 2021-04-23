import {Button} from 'next-ariane'


const test = () => {

    return(<>
           <div>
                <div className="container">
                    <h1>Buttons</h1>
                    <h2>Default Theme : </h2>
                    <div className="wrapper">
                        <Button xsmall>XSmall</Button>
                        <Button small>Small</Button>
                        <Button medium>Medium</Button>
                        <Button large>Large</Button>
                    </div>
                    <div className="wrapper">
                        <Button xsmall bold>
                            XSmall bold
                        </Button>
                        <Button small bold>
                            Small bold
                        </Button>
                        <Button medium bold>
                            {' '}
                            Medium bold
                        </Button>
                        <Button large bold>
                            Large bold
                        </Button>
                    </div>
                    <div className="wrapper">
                        <Button xsmall outlined>
                            XSmall outlined
                        </Button>
                        <Button small outlined bold>
                            Small outlined
                        </Button>
                        <Button medium outlined>
                            {' '}
                            Medium outlined
                        </Button>
                        <Button large outlined submit>
                            Large outlined
                        </Button>
                    </div>
                    <div className="wrapper">
                        <Button
                            xsmall
                            bold
                            iconRight
                            iconSrc="/svg/bell-outline.svg"
                        >
                            XSmall bold IconRight
                        </Button>
                        <Button small bold iconRight iconSrc="/svg/bell.svg">
                            Small bold IconRight
                        </Button>
                        <Button medium bold iconRight iconSrc="/svg/heart.svg">
                            {' '}
                            Medium bold IconRight
                        </Button>
                        <Button
                            large
                            bold
                            iconRight
                            iconSrc="/svg/sync-outline.svg"
                            outlined="/svg/chevron-down-outline.svg"
                        >
                            Large bold IconRight
                        </Button>
                    </div>
                    <div className="wrapper">
                        <Button xsmall bold iconLeft iconSrc="/svg/heart.svg">
                            XSmall bold IconLeft
                        </Button>
                        <Button small bold iconLeft iconSrc="/svg/bell.svg">
                            Small bold IconLeft
                        </Button>
                        <Button
                            medium
                            bold
                            iconLeft
                            iconSrc="/svg/sync-outline.svg"
                        >
                            {' '}
                            Medium bold IconLeft
                        </Button>
                        <Button theme='dark' large bold iconLeft iconSrc="/svg/bell.svg">
                            Large bold IconLeft
                        </Button>
                    </div>
                </div>
            </div>
    
    </>)
}


export default test