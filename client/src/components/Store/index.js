import React, { useState }from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

function Guitar(product){
  //  Create a Cloudinary instance and set your cloud name.
   const cld = new Cloudinary({
    cloud: {
    cloudName: 'daz0iuak1'
    }
});

  console.log(product.product.publicID)
  const publicId = product.product.publicID
  const guitarImage = cld.image(publicId);
  guitarImage.resize(fill().width(250).height(250));

  return(
      <div>
        <AdvancedImage cldImg={guitarImage} />
        this is guitar persistent image from Guitar Store
      </div>
  );

}

export default Guitar;