import React from 'react'

const Button = ({ onClick=()=>{}, icon, text="view" }) => {
  return (
    <button
    onClick={onClick}
    style={{
      backgroundColor: "#F5FFFC",
      border: "1px solid  #007A52",
      color:"black",
      borderRadius: "8px",
      padding: "4px 8px",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      cursor: "text",
    }}
  >
    {icon}
    {text}
  </button>
  )
}

export default Button