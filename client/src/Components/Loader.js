import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [loading,setLoading] = useState(true)

   
    useEffect(()=>{
    const hideLoader = ()=>{
    setLoading(false)
    
    }


     document.addEventListener('DOMContentLoaded', hideLoader);
     return () => {
            document.removeEventListener('DOMContentLoaded', hideLoader); // Cleanup
        };

    },[])
  return (
    <>
   {loading &&  (<div className='loader-wrapper'>
     <div className="loader1">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div>
     </div>)}
    </>
   
  )
}

export default Loader