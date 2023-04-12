var firestore = firebase.firestore();
const db=firestore.collection("emailData")
let submitButton = document.getElementById("submit_button");
  
//Create Event Listener To Allow Form Submission


const submit_button = document.getElementById("submit_button");
const email_input = document.getElementById("email_input").value;

// submit_button.addEventListener("click", (e) => { 
//     if(email_input.length < 10){
//         alert("Please entery a valid email id!");
//         console.log(email_input.length);
//     }
//     if(email_input.length > 10){
//         alert("Thanks for considering us :)");
//         submitButton.disabled = "disabled";
//     }
// });


submit_button.addEventListener("click", (e) => { 
      alert("Thanks for considering us :)");
      submitButton.disabled = "disabled";
});


submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  // e.preventDefault();
let emailname = document.getElementById("email_input").value;

  //Get Form Values
  firestore
    .collection("emailData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().mailId;
        if (emailname === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      mailId: emailname
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });
});

const email_div_class = document.getElementById("email_div_class");
const no_click_div = document.getElementById("no_click_div");
const btn = document.getElementById("yesno_button_yes");
const btn1 = document.getElementById("yesno_button_no");
var fn


btn.addEventListener("click", (e) => {
    email_div_class.style.display = "block";
    btn.disabled = "disabled";
    btn1.disabled = "disabled";

    firestore
    .collection("count")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var fn = doc.data().number;
        fn = fn + 1
        // console.log("data", doc.data().fname);
        console.log(fn)
      });
    });
  //Save Form Data To Firebase
firestore.collection("count").doc("countdoc").set({
  number: fn
 });

});

btn1.addEventListener("click", (e) => {
  no_click_div.style.display = "block";
  btn.disabled = "disabled";
  btn1.disabled = "disabled";
  console.log()
});