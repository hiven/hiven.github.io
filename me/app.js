startScript();

function startScript()
{
	$(document).bind("ready", function(){
		$("#encryptBtn").click(function(){
			var data = $("#inputTxt").val();
			var key = $("#secretTxt").val();
			var encrypted = CryptoJS.AES.encrypt(data,key);
			console.log(encrypted);
			$("#ouputTxt").val(encrypted);
		});
		
		$("#decryptBtn").click(function(){
			var encrypted = $("#inputTxt").val();
			var key = $("#secretTxt").val();
			try
			{
				var data = CryptoJS.AES.decrypt(encrypted,key);
				console.log(data);
				$("#outputTxt").val(data.toString(CryptoJS.enc.Utf8));
			} 
			catch (e)
			{
				alert("Error:" + e.message);		
			}
		});
		
	});
}
