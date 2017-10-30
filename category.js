var ref=firebase.database().ref();
var cat=document.getElementById("cate");
var submitBtn=document.getElementById("submitBtn");

function addCat(){

	 var mcat=cat.value;
	 ref.child("Category").push().set(mcat);
	 $('#AddCategory').modal('hide');
	 // window.alert("Done");
}

var ret = firebase.database().ref().child("Category");

ret.on("child_added",snap =>{

	var question = snap.val();
	$('#ul1').append("<li><a>"+question+"</a></li>");

});

var q=document.getElementById("Ques");
var submitBtnQ=document.getElementById("submitBtnQ");

function addQ(){

	 var mcat=q.value;
	 ref.child("Questions").push().set(mcat);
	 $('#AddQuestion').modal('hide');
	 // window.alert("Done");
}

var ret = firebase.database().ref().child("Questions");

ret.on("child_added",snap =>{

	var question = snap.val();
	$('#').append("<li><a>"+question+"</a></li>");

});


	
