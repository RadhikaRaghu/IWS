
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

