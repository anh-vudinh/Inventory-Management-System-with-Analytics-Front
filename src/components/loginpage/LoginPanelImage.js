import React, {useState, useEffect} from 'react'
import LoginPanelImageIcon from './LoginPanelImageIcon'

function LoginPanelImage({isLoggedIn}){

    const imagesArray = [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.utwente.nl%2F.uc%2Fi882c97f601026fc6250057fc4502f49e5268ce37db8a0701c3dc05000080%2Flasrobot.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcannonball-express.com%2Fwp-content%2Fuploads%2F2018%2F08%2FFood-and-Beverage-Industry.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coastlinenservices.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fshutterstock_741884605.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.howtostartanllc.com%2Fimages%2Fbusiness-ideas%2Fbusiness-idea-images%2FWatch-Repair-Business.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fak.picdn.net%2Fshutterstock%2Fvideos%2F6982306%2Fthumb%2F1.jpg&f=1&nofb=1'
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const cycleTimerMS = 8000

    useEffect(()=>{
        if(isLoggedIn) return;
        const imagesArrayCyclerID = setInterval(imagesArrayCycler, cycleTimerMS)

        return ()=> clearInterval(imagesArrayCyclerID)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoggedIn, currentImageIndex])


    function imagesArrayCycler(){
        if (currentImageIndex < imagesArray.length-1){
            setCurrentImageIndex(currentImageIndex => currentImageIndex+1)
        }else{
            setCurrentImageIndex(0)
        }
    }

    function onIconClick(indexToSet){
        setCurrentImageIndex(indexToSet)
    }

    const loginPanelImageIcon = imagesArray.map((image, index) => 
        <LoginPanelImageIcon
            key={index}
            index={index}
            image={image}
            currentImageIndex={currentImageIndex}
            onIconClick={onIconClick}
        />    
    )

    return(
        <div className="LoginPanelImage">
            <div className="LoginPanelImageOverlay"></div>
            <img className={`LoginPanelCurrentImage`} src={imagesArray[currentImageIndex]} alt={imagesArray[currentImageIndex]}/>
            <div className="LoginPanelImageBar">
                {loginPanelImageIcon}
            </div>
        </div>
    )
}

export default LoginPanelImage