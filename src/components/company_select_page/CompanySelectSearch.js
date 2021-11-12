import React, {useState} from "react";

function CompanySelectSearch(){

    const searchIcon = "https://cdn.onlinewebfonts.com/svg/img_176563.png"
    const [selectedSearch, setSelectedSearch] = useState(false)

    return(
        <div className={`CompanySelectSearchContainer ${selectedSearch? "csSearchExpand" : ""}`} onClick={()=> setSelectedSearch(!selectedSearch)}>
            <div className="CompanySelectSearchTitle">
                <img src={searchIcon} alt="Search Icon" title="Search Companies"/>
            </div>
        </div>
    )
}

export default CompanySelectSearch