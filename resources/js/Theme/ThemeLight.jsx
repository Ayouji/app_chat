
import React from 'react'
import   '../../css/assets/css/template.bundle.css'
const Light_Mode =({ children })=>{
    
  console.log('Light_Mode executed');
    
    // Render the children inside a wrapper div
    return <>{children}</>;
  
}
export default Light_Mode;