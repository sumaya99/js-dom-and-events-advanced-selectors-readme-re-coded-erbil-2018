// declare your functions here...
function paragraphSelector(){
  return $('p')
}




function lastImageSelector(){
return $('img:last')}

function ninjaBabySelector(){
return $('#baby-ninja')
}
function divSelector(){
return $('.pics:nth-child(1)') + $('.pics:nth-child(2)')}
function firstListItem(){
return $('#pics-list  li:first-child')}

console.log(divSelector())