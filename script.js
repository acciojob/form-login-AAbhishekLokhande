function getFormvalue() {
 //    //Write your code here
	// let output = document.getElementsByName("fname");
	// let output2 = document.getElementsByName("lname");
	// alert(output+ " " +output2);
	var firstName = document.getElementById('form1').elements['fname'].value;
    var lastName = document.getElementById('form1').elements['lname'].value;
    alert(firstName +" "+ lastName);
    
}
