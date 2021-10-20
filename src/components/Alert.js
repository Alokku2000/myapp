import React from 'react'

function Alert(props) {
    const captilizeFirstLetter=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
        props.alertShow &&  <div className={`alert alert-${props.alertShow.typ} alert-dismissible fade show`} role="alert">
        <strong>{captilizeFirstLetter(props.alertShow.typ)}:{props.alertShow.msg}</strong> 
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">  dismiss button diabled beacuse of settime out*/} 
        {/* </button> */}
         </div>
    )
}

export default Alert
