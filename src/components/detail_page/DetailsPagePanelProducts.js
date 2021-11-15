import React, {useEffect, useState} from 'react'

function DetailsPagePanelProducts({BACK_END_URL, handleSubCategoryClick, selectedSubCategory, selectedCompany}){

    const [productsArray, setProductsArray] = useState([])

    useEffect(()=>{
        
    },[])

    return(
        <div className={`DetailsPagePanelProducts ${selectedSubCategory === "Products"? "DetailsPagePanelShow" : "" }`}>
             <div className="DetailsPagePanelProductsTitle" onClick={()=> handleSubCategoryClick("Products")}>
                <p>Products</p>
            </div>
        </div>
    )
}

export default DetailsPagePanelProducts