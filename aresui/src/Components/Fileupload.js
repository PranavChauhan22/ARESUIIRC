import React from 'react';
import "../Components/styles.css"
import { Jimage } from "react-jimp";
class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
   
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview1 = null;
      let $imagePreview2 = null;
      let $imagePreview3 = null;
      let $imagePreview4 = null;
      if (imagePreviewUrl) {
        $imagePreview1 = (
        
          <img src={imagePreviewUrl}
        />     
        );
        $imagePreview2 = (
        
         <Jimage
          src={imagePreviewUrl}
         
          pixelate="5"
          // mirror="true, false"
          greyscale
          color={[{ apply: "red", params: [100] }]}
          loadBlur
        /> );
        $imagePreview3 = (
      
          <Jimage
          src={imagePreviewUrl}
      
          pixelate="5"
          // mirror="true, false"
          greyscale
          color={[{ apply: "blue", params: [80] }]}
          loadBlur
        /> );
        $imagePreview4 = (<Jimage
          src={imagePreviewUrl}
          
          pixelate="5"
          // mirror="true, false"
          greyscale
          color={[{ apply: "green", params: [100] }]}
          loadBlur
        /> );
      } else {
        $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        $imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        $imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
        $imagePreview4 = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            
            <input className="fileInput" 
              type="file"
              
              onChange={(e)=>this._handleImageChange(e)} />
            
          </form>
          <div className="container">

          <div className="imgPreview">
            {$imagePreview1}
            
          </div>
          <div className="imgPreview">
            {$imagePreview2}
            
          </div>
          <div className="imgPreview">
            {$imagePreview3}
            
          </div>
          <div className="imgPreview">
            {$imagePreview4}
            
          </div>
          </div>
        </div>
      )
    }
  }
    
export default ImageUpload;