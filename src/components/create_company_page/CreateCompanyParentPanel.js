import React from "react";

function CreateCompanyParentPanel({selectedParent, is_parent}){

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
                        <p>{selectedParent.employees_count}</p>
                    </div>
                    <div>
                        <p>Children: </p>
                        <p>{selectedParent.children_count}</p>
                    </div>
                    <div>
                        <p>Parent ? </p>
                        <p>{selectedParent.is_parent? "Yes" : "No"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCompanyParentPanel


