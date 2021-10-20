import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.homedena}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.Linkdena}</a>
        </li>
      </ul>
      {/* <button type="button" className="btn btn-warning" onClick={props.clickmode}>{props.changemode}</button> */}
       {/* <div className="colorPic">
         <label htmlFor="colorPick" style={{color:props.mode==="dark"?"white":"black"}}>{colorMode}</label>
         <input type="color" name="colorPicc" id="colorpick"  onInput={changeDocumentColor}/>
       </div> */}
       {/* <div className="form-check form-switch mx-3">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.pinkChange}/>
       <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.pinkText}</label>
       </div> */}
       <div className="form-check form-switch">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.clickSwitch}/>
       <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.changeText}</label>
       </div>
    </div>
   </div>
</nav>
</>
    )
}
Navbar.propTypes={
    Title:PropTypes.string.isRequired,
    homedena:PropTypes.string.isRequired,
}
Navbar.defaultProps={
    Title:"Set title here",
    homedena:"write home here",
    Linkdena:"Link dai n yaar", 
};
// htmlfor="flexSwitchCheckDefault" 
