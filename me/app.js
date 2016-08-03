startScript();

function startScript()
{
	$(document).bind("ready", function(){
		$("#encryptBtn").click(function(){
			var data = $("#dataTxt").val();
			var key = $("#secretTxt").val();
			var encrypted = CryptoJS.AES.encrypt(data,key);
			$("#encryptedTxt").text(encrypted);
		});
		
		$("#decryptBtn").click(function(){
			var data = $("#dataTxt").val();
			var key = $("#secretTxt").val();
			try
			{
				var data = CryptoJS.AES.decrypt(data,key);
				$("#encryptedTxt").text(data.toString(CryptoJS.enc.Utf8));
			} 
			catch (e)
			{
				alert("Error:" + e.message);		
			}
		});
		
	});
}
