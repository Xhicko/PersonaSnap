document.addEventListener("DOMContentLoaded", function() {
   const form = document.getElementById("profileForm");
   if (form) {
       form.addEventListener("submit", function(event) {
           event.preventDefault();
           
           // Get form values
           const formData = {
               dfn: document.getElementById("dfn").value,
               dnn: document.getElementById("dnn").value,
               dh: document.getElementById("dh").value,
               dfc: document.getElementById("dfc").value,
               ddo: document.getElementById("ddo").value,
               dso: document.getElementById("dso").value,
               dcc: document.getElementById("dcc").value,
               dcl: document.getElementById("dcl").value,
               dnc: document.getElementById("dnc").value,
               drs: document.getElementById("drs").value,
               dsh: document.getElementById("dsh").value,
               dmn: document.getElementById("dmn").value
           };
           
           // Store data in sessionStorage
           for (const [key, value] of Object.entries(formData)) {
               sessionStorage.setItem(key, value);
           }
           
           console.log("Form data stored:", formData); // Debugging log
           
           // Handle file upload
           const photoInput = document.getElementById("photo");
           if (photoInput) {
               console.log("Photo input found");
               const file = photoInput.files[0];
               if (file) {
                   console.log("File selected:", file.name);
                   const reader = new FileReader();
                   reader.onload = function(e) {
                     sessionStorage.setItem('photo', e.target.result);
                       window.location.href = "/Design/Data.html";
                   };
                   reader.readAsDataURL(file);
               } else {
                   console.log("No file selected");
                   window.location.href = "/Design/Data.html";
               }
           } else {
               console.log("Photo input not found");
           }
       });
   } else {
       console.log("Profile form not found on this page");
   }
});
