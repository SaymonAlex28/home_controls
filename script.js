// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJbQh2k037-W5ZCNCy3BJyutrhuvi9aZU",
  authDomain: "tempandlight-624c7.firebaseapp.com",
  databaseURL: "https://tempandlight-624c7-default-rtdb.firebaseio.com",
  projectId: "tempandlight-624c7",
  storageBucket: "tempandlight-624c7.appspot.com",
  messagingSenderId: "40586778110",
  appId: "1:40586778110:web:b4e1b2805b928785995caf",
  measurementId: "G-TP7YNM0LCL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
  let database = firebase.database();
  let LedbathStatus;
  let BathStatpin;
  let LedkitchStatus;
  let KitchStatpin;
  let LedtvStatus;
  let TvStatpin;
  let LedbedStatus;
  let BedStatpin;
  database.ref().on("value", function (snap) {
    LedbathStatus = snap.val().LedbathStatus;
    BathStatpin = snap.val().BathStatpin;
    LedkitchStatus = snap.val().LedkitchStatus;
    KitchStatpin = snap.val().KitchStatpin;
    LedtvStatus = snap.val().LedtvStatus;
    TvStatpin = snap.val().TvStatpin;
    LedbedStatus = snap.val().LedbedStatus;
    BedStatpin = snap.val().BedStatpin;
    if (LedbathStatus == "1") {
      document.getElementById("unact").style.display = "none";
      document.getElementById("act").style.display = "block";
    } else {
      document.getElementById("unact").style.display = "block";
      document.getElementById("act").style.display = "none";
    }
    if (BathStatpin == "1") {
      document.getElementById("bath").style.color = "gold";
    } else {
      document.getElementById("bath").style.color = "grey";
    }
    if (LedkitchStatus == "1") {
      document.getElementById("unact1").style.display = "none";
      document.getElementById("act1").style.display = "block";
    } else {
      document.getElementById("unact1").style.display = "block";
      document.getElementById("act1").style.display = "none";
    }
    if (KitchStatpin == "1") {
      document.getElementById("kitch").style.color = "gold";
    } else {
      document.getElementById("kitch").style.color = "grey";
    }
    if (LedtvStatus == "1") {
      document.getElementById("unact2").style.display = "none";
      document.getElementById("act2").style.display = "block";
    } else {
      document.getElementById("unact2").style.display = "block";
      document.getElementById("act2").style.display = "none";
    }
    if (TvStatpin == "1") {
      document.getElementById("tvset").style.color = "gold";
    } else {
      document.getElementById("tvset").style.color = "grey";
    }
    if (LedbedStatus == "1") {
      document.getElementById("unact3").style.display = "none";
      document.getElementById("act3").style.display = "block";
    } else {
      document.getElementById("unact3").style.display = "block";
      document.getElementById("act3").style.display = "none";
    }
    if (BedStatpin == "1") {
      document.getElementById("bed").style.color = "gold";
    } else {
      document.getElementById("bed").style.color = "grey";
    }
  });

  $(".toggle-btn").click(function () {
    let firebaseRef = firebase.database().ref().child("LedbathStatus");
    if (LedbathStatus == "1") {
      firebaseRef.set("0");
      LedbathStatus = "0";
    } else {
      firebaseRef.set("1");
      LedbathStatus = "1";
    }
  })
  $(".toggle-btn1").click(function () {
    let firebaseRef = firebase.database().ref().child("LedkitchStatus");
    if (LedkitchStatus == "1") {
      firebaseRef.set("0");
      LedkitchStatus = "0";
    } else {
      firebaseRef.set("1");
      LedkitchStatus = "1";
    }
  })
  $(".toggle-btn2").click(function () {
    let firebaseRef = firebase.database().ref().child("LedtvStatus");
    if (LedtvStatus == "1") {
      firebaseRef.set("0");
      LedtvStatus = "0";
    } else {
      firebaseRef.set("1");
      LedtvStatus = "1";
    }
  })
  $(".toggle-btn3").click(function () {
    let firebaseRef = firebase.database().ref().child("LedbedStatus");
    if (LedbedStatus == "1") {
      firebaseRef.set("0");
      LedbedStatus = "0";
    } else {
      firebaseRef.set("1");
      LedbedStatus = "1";
    }
  })
});


let datacheck = firebase.database();
datacheck.ref().on("value", function (snap) {
  valbath_light = snap.val().BathBright;
  valbath_temp = snap.val().Tempbathroom;
  valkitch_light = snap.val().KitchenBright;
  valkitch_temp = snap.val().Tempkitchen;
  valtv_light = snap.val().TvsetBright;
  valtv_temp = snap.val().Temptvset;
  valbed_light = snap.val().BedBright;
  valbed_temp = snap.val().Tempbedroom;
  function updatebathlightBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".bathlight__fill").style.width = `${value}%`;
    progressBar.querySelector(".bathlight__text").textContent = `${value}%`;
  }

  function updatebathtempBar(progressBar, value) {
  progressBar.querySelector(".bathtemp__fill").style.width = `${value}%`;
  progressBar.querySelector(".bathtemp__text").textContent = `${value}℃`;
  }

  function updatekitchlightBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".kitchlight__fill").style.width = `${value}%`;
    progressBar.querySelector(".kitchlight__text").textContent = `${value}%`;
  }

  function updatekitchtempBar(progressBar, value) {
    progressBar.querySelector(".kitchtemp__fill").style.width = `${value}%`;
    progressBar.querySelector(".kitchtemp__text").textContent = `${value}℃`;
  }

  function updatetvlightBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".tvlight__fill").style.width = `${value}%`;
    progressBar.querySelector(".tvlight__text").textContent = `${value}%`;
  }

  function updatetvtempBar(progressBar, value) {
    progressBar.querySelector(".tvtemp__fill").style.width = `${value}%`;
    progressBar.querySelector(".tvtemp__text").textContent = `${value}℃`;
  }

  function updatebedlightBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".bedlight__fill").style.width = `${value}%`;
    progressBar.querySelector(".bedlight__text").textContent = `${value}%`;
  }

  function updatebedtempBar(progressBar, value) {
    progressBar.querySelector(".bedtemp__fill").style.width = `${value}%`;
    progressBar.querySelector(".bedtemp__text").textContent = `${value}℃`;
  }
  const bathlightBar = document.querySelector(".secbath_light");
  const bathtempBar = document.querySelector(".secbath_temp");
  const kitchlightBar = document.querySelector(".seckitch_light");
  const kitchtempBar = document.querySelector(".seckitch_temp");
  const tvlightBar = document.querySelector(".sectv_light");
  const tvtempBar = document.querySelector(".sectv_temp");
  const bedlightBar = document.querySelector(".secbed_light");
  const bedtempBar = document.querySelector(".secbed_temp");

  /* Example */
  updatebathlightBar(bathlightBar, valbath_light);
  updatebathtempBar(bathtempBar, valbath_temp);
  updatekitchlightBar(kitchlightBar, valkitch_light);
  updatekitchtempBar(kitchtempBar, valkitch_temp);
  updatetvlightBar(tvlightBar, valtv_light);
  updatetvtempBar(tvtempBar, valtv_temp);
  updatebedlightBar(bedlightBar, valbed_light);
  updatebedtempBar(bedtempBar, valbed_temp);

});
