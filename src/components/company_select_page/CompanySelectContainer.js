import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import CompanySelectChildren from './CompanySelectChildren'
import CompanySelectHeader from './CompanySelectHeader'
import CompanySelectParents from './CompanySelectParents'
import MinusIcon from '../../assets/MinusIcon.png'
import PlusIcon from '../../assets/PlusIcon.png'

function CompanySelectContainer({selectedCompany, setSelectedCompany, currentUser, isLoggedIn, BACK_END_URL}){

    const [selectedParentCategory, setSelectedParentCategory] = useState(true)
    const [parentCompanyArray, setParentCompanyArray] = useState([])
    const [childCompanyArray, setChildCompanyArray] = useState([])
    const [selectedParentName, setSelectedParentName] = useState("")
    
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
      
        fetch(`${BACK_END_URL}/api/companies`, headers)
        .then(resp => resp.json())
        .then(data => {
            setParentCompanyArray(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!isLoggedIn){
        return <Redirect to="/"/>
    }

    return(
        <div className="CompanySelectContainer">
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
        </div>
    )
}

export default CompanySelectContainer