import React from 'react';

const TextSection = () => {
    return (
        <>
         <div className="container py-4">
             <h4 className="mb-3">5.Configure your logo</h4>
            <div className="row">
              <div className="col-md-12">
              <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="textLine1" className="form-label">Text Line 1 *</label>
                        <input type="text" className="form-control" id="textLine1" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="textLine2" className="form-label">Text Line 2 (optional)</label>
                        <input type="text" className="form-control" id="textLine2"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="textLine3" className="form-label">Text Line 3 (optional)</label>
                        <input type="text" className="form-control" id="textLine3"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="font" className="form-label">Font</label>
                        <select id="font" className="form-select style widthHeight">
                        <option defaultValue="" selected>Arial</option>
                        <option defaultValue=""> Black Light</option>
                        <option defaultValue=""> Arial Rounded</option>
                        <option defaultValue=""> Century Gothic</option>
                        <option defaultValue=""> Comic Sans</option>
                        <option defaultValue=""> DIN</option>
                        <option defaultValue=""> Futura</option>
                        <option defaultValue=""> Helevtica</option>
                        <option defaultValue=""> Lobster</option>
                        <option defaultValue=""> Proxima Nova</option>
                        <option defaultValue=""> Avant Garde</option>
                        <option defaultValue=""> Montserrat</option>
                        <option defaultValue=""> Handel Gothic</option>
                        <option defaultValue=""> Mark Pro</option>
                        <option defaultValue=""> Lucida Sans</option>
                        <option defaultValue=""> Zen Loop</option>
                        <option defaultValue=""> Noto Sans JP</option>
                        <option defaultValue=""> Poppins</option>
                        <option defaultValue=""> Noto Sans</option>
                        <option defaultValue=""> Roboto Slab</option>
                        <option defaultValue=""> Lora</option>
                        <option defaultValue=""> Mulish</option>
                        <option defaultValue=""> Bebas Neue</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="color" className="form-label">Color</label>
                        <select id="color" className="form-select style widthHeight">
                        <option defaultValue="" selected>Black</option>
                        <option defaultValue=""> Black bean</option>
                        <option defaultValue=""> Black chocolate</option>
                        <option defaultValue=""> Black coffee</option>
                        <option defaultValue=""> Black coral</option>
                        <option defaultValue=""> Blue</option>
                        <option defaultValue=""> Blue-violet</option>
                        <option defaultValue=""> Brown</option>
                        <option defaultValue=""> Carmine</option>
                        <option defaultValue=""> Cerise</option>
                        <option defaultValue=""> China pink</option>
                        <option defaultValue=""> China rose</option>
                        <option defaultValue=""> Coffee</option>
                        <option defaultValue=""> Coral</option>
                        <option defaultValue=""> Crimson</option>
                        <option defaultValue=""> Cyan</option>
                        <option defaultValue=""> Dark green</option>
                        <option defaultValue=""> Grey</option>
                        <option defaultValue=""> Orange</option>
                        <option defaultValue=""> Tomato</option>
                        <option defaultValue=""> Maroon</option>
                        <option defaultValue=""> Silver</option>
                        <option defaultValue=""> Green</option>
                        <option defaultValue=""> Red</option>
                        <option defaultValue=""> LavenderBlush</option>
                        <option defaultValue=""> Cornsilk</option>
                        <option defaultValue=""> Gold</option>
                        <option defaultValue=""> DeepPink</option>
                        <option defaultValue=""> DarkSalmon</option>
                        <option defaultValue=""> IndianRed</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="textPreview" className="form-label">Text Preview</label>
                         <div className="card p-4">
                           <div className="d-flex justify-content-center">
                             <button className="btn btn-dark py-4 px-5">Preview</button>
                           </div>
                         </div>
                    </div>
               </form>
              </div>
            </div>
         </div>    
        </>
    );
};

export default TextSection;