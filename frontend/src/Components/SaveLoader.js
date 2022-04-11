import React from 'react'

const SaveLoader = ({loading}) => {
    return (
        <>
            {loading?
                <div className="saveLoader">
                </div> :
                <div className="saveLoaderDone">
                    <i className="fas fa-check-circle" style={{fontSize:"30px"}}></i>
                </div>
            }
        </>
    )
}

export default SaveLoader
