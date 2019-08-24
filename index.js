function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  let el1 = document.getElementById('nested')
  return el1.getElementsByClassName('target')
}