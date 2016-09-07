var target_index;
var guess_input_text;
var guess_input;
var finished=false;
var count=0;
var color=["Aqua","Yellow","Cyan","DarkRed","GoldenRod","HotPink","LightCoral","Black","Indigo","Violet","Orange"];
var myBody;

function do_game(){

var random_number= Math.random()*(color.length-1);
var random_number_integer= Math.floor(random_number);
target_index=color[(random_number_integer)+1];
//alert(target_index);

while (!finished) {
guess_input_text=prompt("I am thinking of one of these colors\n\n"+"Aqua,Yellow,Cyan,DarkRed,GoldenRod,HotPink,LightCoral,Black,Indigo,Violet,Orange\n\n"+"what color am I thinking of?");
count+=1;
finished=check_guess();
}
}
function check_guess(){
if(color.indexOf(guess_input_text)==-1){
alert("Sorry, I don't recognize your color\n"+"Please try again.");
return false;
}
if(guess_input_text>target_index){
alert("Sorry,your guess is not correct\n"+"Hint:your color is alphabetically higher than mine.\n"+"Please try again");
return false;
}
if(guess_input_text<target_index){
alert("Sorry,your guess is not correct\n"+"Hint:your color is alphabetically lower than mine\n"+"Please try again");
return false;
}
if(guess_input_text==target_index){
myBody=document.getElementsByTagName("body")[0];
myBody.style.background=target_index;
alert("you got it awesome"+target_index+"\n \n"+count+"You can see the color in the background");
return true;
}
}
