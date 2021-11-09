import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import CompanySelectChildren from './CompanySelectChildren'
import CompanySelectHeader from './CompanySelectHeader'
import CompanySelectParents from './CompanySelectParents'
import MinusIcon from '../../assets/MinusIcon.png'
import PlusIcon from '../../assets/PlusIcon.png'

function CompanySelectContainer({currentUser, isLoggedIn}){

    const [selectedCompany, setSelectedCompany] = useState("")
    const [selectedParentCategory, setSelectedParentCategory] = useState(true)
    const [parentCompanyArray, setParentCompanyArray] = useState([])
    const [childCompanyArray, setChildCompanyArray] = useState([])

    useEffect(()=>{
        //fetch user.companies
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
                MinusIcon={MinusIcon}
                PlusIcon={PlusIcon}
                selectedParentCategory={selectedParentCategory} setSelectedParentCategory={setSelectedParentCategory}
            />
            <CompanySelectChildren
                MinusIcon={MinusIcon}
                PlusIcon={PlusIcon}
                selectedParentCategory={selectedParentCategory} setSelectedParentCategory={setSelectedParentCategory}
            />
        </div>
    )
}

export default CompanySelectContainer