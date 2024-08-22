document.addEventListener("DOMContentLoaded", function() {
   const displayElements = {
       dfn: document.getElementById("dfn"),
       dnn: document.getElementById("dnn"),
       dh: document.getElementById("dh"),
       dfc: document.getElementById("dfc"),
       ddo: document.getElementById("ddo"),
       dso: document.getElementById("dso"),
       dcc: document.getElementById("dcc"),
       dcl: document.getElementById("dcl"),
       dnc: document.getElementById("dnc"),
       drs: document.getElementById("drs"),
       dmn: document.getElementById("dmn"),
       dsh: document.getElementById("dsh")
   };

   for (const [key, element] of Object.entries(displayElements)) {
       if (element) {
           const value = sessionStorage.getItem(key.replace('display', '').toLowerCase());
           if (value) {
               element.textContent = value;
           } else {
               console.log(`No data found for ${key}`);
           }
       } else {
           console.log(`Element not found: ${key}`);
       }
   }

   // Display the photo
   const photoElement = document.getElementById("displayPhoto");
   if (photoElement) {
       const photoData = sessionStorage.getItem('photo');
       if (photoData) {
           photoElement.src = photoData;
       } else {
           console.log("No photo data found");
       }
   } else {
       console.log("Photo element not found");
   }
});



document.getElementById("screenshotButton").addEventListener("click", function() {
   const elementToCapture = document.querySelector(".Display");

   if (elementToCapture) {
       html2canvas(elementToCapture).then(function(canvas) {
           const dataURL = canvas.toDataURL("image/png");
           const link = document.createElement('a');
           link.href = dataURL;
           link.download = 'screenshot.png';
           link.click();
       }).catch(function(error) {
           console.error("Error taking screenshot:", error);
       });
   } else {
       console.log("Element with class 'Display' not found.");
   }
});