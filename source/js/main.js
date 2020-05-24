/*function hello(name) {
    return `Hello! ${name}`;
}
var _foo = () => {
   return "Babel"
};
console.log(_foo());*/
/*var el = document.getElementsByClassName("navigation__logo")[0];
el.onclick = function() {
  console.log("test")
}*/

$(".navigation__logo").on('click', function(e) {
	e.preventDefault();
	console.log('test');
});