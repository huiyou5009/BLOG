let tt = document.getElementById("in_1");
let ct = document.getElementById("in_2");
let bt = document.getElementById("submit");
let list = document.getElementById("list");

// 點擊輸入框_保持原樣
const click_in_tt=function(){
	tt.style = "";
	tt.placeholder = "";
};

const click_in_ct=function(){
	ct.style = "";
	ct.placeholder = "";
};

tt.addEventListener("click", click_in_tt);
ct.addEventListener("click", click_in_ct);


// 輸入框為空時
const tt_null = function(){
	tt.style.border = "2px solid red";
	tt.placeholder = "Please enter the Title";
};

const ct_null = function(){
	ct.style.border = "2px solid red";
	ct.placeholder = "Please enter the Content";
}

const click_submit = function(){
	if (tt.value!=="" &&  ct.value!=="") {
			list.innerHTML = list.innerHTML + `
				<div class="article">
					<h2>${tt.value}</h2>
					<p>${ct.value}</p>	
				</div>
				`;	// $+{} 就可以在{} 使用js的東西
			tt.value = "";
			ct.value = "";
	} else if (tt.value=="" && ct.value!==""){
			tt_null();			
	}	else if (tt.value!=="" && ct.value==""){
			ct_null();
	}	else {
			tt_null();
			ct_null();
	}
};

bt.addEventListener("click", click_submit);