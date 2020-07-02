
class Item {

	static scr = 0;

	constructor(arg){
		this.obj = arg;
		this.double = 0;
	}


	click(arg1,arg2,arg3){
		let x = this;

		this.obj.onclick = function(){
			x.obj.style.display = "none";
			
			

			if(arg1 == "hide"){
				document.querySelector("."+arg2).style.display = "none"

			}
			if(arg3!=null){
				console.log(arg3)
			

				Item.scr = Item.scr  + arg3
				console.log(Item.scr)
				document.querySelector(".score").innerHTML = Item.scr;
			}else{
				alert("Ð±ÐµÐ· Ð±Ð°Ð»Ð»Ð°")
			}
		}
	}
	doubleClick() {
		let x = this;
		//console.log(this.double);
		if (this.double==0) {
			this.obj.onclick = function(){
				console.log("Ð½Ð°Ð¶Ð°Ð»")
				this.double = 1
			}
		} 

	}
	// score(){
	// 	console.log(Item.scr)
	// } 
}

function find(arg){
	let x = document.querySelector("."+arg);


	return new Item(x);	
}