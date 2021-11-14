import React from "react";

function CreateCompanyParentPanel({selectedParent, is_parent}){

    // ! Need to change column name in backend to match before can use
    // const topFieldsArray = ["location"]
    // const bottomFieldsArray = ["structure", "type", "industry"]

    // const topFields = topFieldsArray.map(field => 
    //     <>
    //         <p>{`${field}:`}</p>
    //         <p>
    //             {Object.entries(selectedParent).find(obj => obj[0].includes(field))[1]}
    //         </p>
    //     </>    
    // )

    // const bottomFields = bottomFieldsArray.map(field => 
    //     <div>
    //         <p>{`${field}:`}</p>
    //         <p>
    //             {Object.entries(selectedParent).find(obj => obj[0].includes(field))[1]}
    //         </p>
    //     </div>    
    // )


    return(
        <div className={`CreateCompanyParentPanel ${is_parent || selectedParent.name === ""? "hidden" : ""}`}>
            <div className="CreateCompanyParentPanelTop">
                <p>Location:</p>
                <p>{selectedParent.location}</p>
            </div>

            <div className="CreateCompanyParentPanelBottom">
                <div className="CreateCompanyParentPanelBottomLeft">
                    <div>
                        <p>Structure:</p>
                        <p>{selectedParent.structure}</p>
                    </div>

                    <div>
                        <p>Organization: </p>
                        <p>{selectedParent.organization}</p>
                    </div>
                    <div>
                        <p>Industry: </p>
                        <p>{selectedParent.industry}</p>
                    </div>
                </div>
                <div className="CreateCompanyParentPanelBottomRight">
                    <div>
                        <p>Employees: </p>
                        <p>{selectedParent.employees}</p>
                    </div>
                    <div>
                        <p>Children: </p>
                        <p>{selectedParent.children}</p>
                    </div>
                    <div>
                        <p>Parent?: </p>
                        <p>{selectedParent.is_parent.toString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCompanyParentPanel


