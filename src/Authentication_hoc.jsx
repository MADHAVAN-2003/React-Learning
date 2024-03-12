import React from 'react'
let isAuthorized = false

export default function Authentication_hoc(Component) {
  return function (){
    return isAuthorized ?  (<Component isAuthorized = {isAuthorized}/>) :  ( <>User is Not Authorized<br/></>)
    
  }
}
