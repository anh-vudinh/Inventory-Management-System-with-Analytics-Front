import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import CompanySelectChildren from './CompanySelectChildren'
import CompanySelectHeader from './CompanySelectHeader'
import CompanySelectParents from './CompanySelectParents'
import MinusIcon from '../../assets/MinusIcon.png'
import PlusIcon from '../../assets/PlusIcon.png'

function CompanySelectContainer({logoutSession, selectedCompany, setSelectedCompany, currentUser, isLoggedIn, BACK_END_URL}){

    const bgImage = "https://www.elomatic.com/en/assets/images/services/information-management/information-management.jpg"
    const logoutIcon = "https://www.pinclipart.com/picdir/big/126-1262666_open-exit-door-open-door-icon-png-clipart.png"
    const addIcon = "http://www.clker.com/cliparts/E/D/d/g/1/1/white-plus-md.png"
    const [selectedParentCategory, setSelectedParentCategory] = useState(true)
    const [parentCompanyArray, setParentCompanyArray] = useState([])
    const [childCompanyArray, setChildCompanyArray] = useState([])
    const [selectedParentName, setSelectedParentName] = useState("")
    const [createCompany, setCreateCompany] = useState(false)
    
    useEffect(()=>{
        if(!isLoggedIn) return;
        //fetch user.companies
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
      
        fetch(`${BACK_END_URL}/api/get_parents`, headers)
        .then(resp => resp.json())
        .then(data => {
            setParentCompanyArray(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!isLoggedIn){
        return <Redirect to="/"/>
    }

    if(createCompany){
        return <Redirect to="/create_company"/>
    }

    return(
        <div className="CompanySelectContainer">
           <img className="CompanySelectContainerBGImage" src={bgImage} alt="background"/>

            <CompanySelectHeader
                currentUser={currentUser}
            />

            <CompanySelectParents
                BACK_END_URL={BACK_END_URL}
                MinusIcon={MinusIcon}
                PlusIcon={PlusIcon}
                setSelectedParentName={setSelectedParentName}
                parentCompanyArray={parentCompanyArray}
                selectedParentCategory={selectedParentCategory} setSelectedParentCategory={setSelectedParentCategory}
                selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
                childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
            />

            <CompanySelectChildren
                MinusIcon={MinusIcon}
                PlusIcon={PlusIcon}
                selectedParentName={selectedParentName} setSelectedParentName={setSelectedParentName}
                selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
                selectedParentCategory={selectedParentCategory} setSelectedParentCategory={setSelectedParentCategory}
                childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
            />

            <div className="CompanySelectLogout" onClick={logoutSession}>
                <img src={logoutIcon} alt="logout" title="Logout"/>
            </div>

            <div className="CompanySelectCreateCompany" onClick={()=> setCreateCompany(true)}>
                <img src={addIcon} alt="create company" title="Create Company"/>
            </div>
        </div>
    )
}

export default CompanySelectContainer