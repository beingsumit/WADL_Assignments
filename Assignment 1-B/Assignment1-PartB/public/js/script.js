$(document).ready(function () {
$("#submit").click(function () {
	$.post("/request",
		{
			name: "Sumit",
			designation: "UG"
		},
		function (data, status) {
			console.log(data)
            // alert(data[0].name_recieved)
			localStorage.setItem("name","Sumit")
			localStorage.setItem("designation","UG")
		});
});
});
