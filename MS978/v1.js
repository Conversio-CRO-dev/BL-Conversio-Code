var styles = `
  .b-totals__row{
    display:none;
  }
   
  .b-totals__promotions{
    margin-top:unset;
    padding:unset;
  }
  
  @media only screen and (max-width: 500px) {
  .b-item__price{
    display:none !important;
  }
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)