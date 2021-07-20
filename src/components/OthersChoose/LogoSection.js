import { CloudUploadSharp } from '@material-ui/icons';
import React from 'react';

const LogoSection = () => {
    return (
        <>
        <div className="container py-4">
           <h4 className="mb-3">5.Configure your logo</h4>
            <div className="row">
             <div className="col-md-12">
              <div className="d-flex">
               <input className="form-check-input mr-2" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                <p>Upload a logo file</p>
              </div>      
              <div className="card p-4">
                <div className="p-4 d-flex justify-content-center align-items-center flex-column" style={{border: '1px dashed gray'}}>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <label htmlFor="file" className="form-label custom-file-upload mb-4"><CloudUploadSharp/> Choose file</label>
                    <p>JPG, PNG, EPS, AI, PDF</p>
                    <small>Max size: 8MB</small>
                  </div>
              </div>
              <div className="text-center pt-2">
                  <p>Don’t worry how it looks, we will make it look great and send a proof before we add to <br/> your products!</p>
              </div>
          </div>
         </div>
        </div>         
        </>
    );
};

export default LogoSection;