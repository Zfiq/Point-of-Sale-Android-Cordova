var firebaseConfig = {
  apiKey: "AIzaSyAZr-13uzokdjaa27u479HUGxKsqz3QdVE",
  authDomain: "reactpos-89add.firebaseapp.com",
  databaseURL: "https://reactpos-89add-default-rtdb.firebaseio.com",
  projectId: "reactpos-89add",
  storageBucket: "reactpos-89add.appspot.com",
  messagingSenderId: "216013502869",
  appId: "1:216013502869:web:d9be72feebe1c000845e9c",
  measurementId: "G-0CSX2B8VGX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var confirmName = "";
let confirmAdress = "";
let confirmContact = "";

let orderNo = "";
let total = "";
let vat = "";
let change = "";
let amountPaid1 = "";
let amountPaid2 = "";
let paidBy = "";

function saveBusinessName() {
  alert(
    "Business Name is saved\nPlease restart the app once all details are entered."
  );
  let x = document.getElementById("businessNameInput");
  confirmName = x.value;

  setTimeout(localStorage.setItem("businessName", confirmName), 1000);

  document.getElementById("business-name").innerHTML = confirmName;
}

function saveBusinessAddress() {
  let address = document.getElementById("businessAddressInput");
  confirmAdress = address.value;

  setTimeout(localStorage.setItem("businessAddress", confirmAdress), 1000);
  document.getElementById("business-address").innerHTML = confirmAdress;
}
function saveBusinessContact() {
  let contact = document.getElementById("businessContactInput");
  confirmContact = contact.value;

  setTimeout(localStorage.setItem("businessContact", confirmContact), 1000);
  document.getElementById("business-contact").innerHTML = confirmContact;
}
// Save the user details just in case app closes or crashes.
console.log(
  "SAVED details " +
    localStorage.getItem("businessName") +
    localStorage.getItem("businessAddress") +
    localStorage.getItem("businessContact")
);

function openPos() {
  var ref = cordova.InAppBrowser.open(
    "https://point-of-sale-system-react.vercel.app",
    "_blank",
    "location=no,zoom=no,toolbar=no"
  );
}

var ref = firebase.database().ref("BusinessName/VAT/");
ref.on("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    vat = childSnapshot.val();
  });
});

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

var check = "";
var data1 = [];
document.getElementById("select").addEventListener("click", (e) => {
  var element = e.currentTarget;
  element.clicks = (element.clicks || 0) + 1;
  if (element.clicks == 1) {
    BTPrinter.list(
      function (data) {
        console.log("Success");

        data1 = [data[0], data[3], data[6]];
        if (data1 != undefined) {
          alert(
            "If device is not found in the list please unpair unused devices and try again."
          );
        }
        data1.forEach((value) => {
          var select = document.getElementById("select");
          var option = document.createElement("option");
          option.innerHTML = value;
          select.append(option);
          document.querySelector("select").addEventListener("change", (e) => {
            var select = e.target.value;
            check = select;
          });
        });
      },
      function (err) {
        console.log("Error");
        console.log(err);
      }
    );
  } else {
    // Clear all device names
    data1.length = 0;
  }
});

// CONNECT DEVICE IF SELECTED

document.getElementById("connect-btn").addEventListener("click", () => {
  alert(check);
  BTPrinter.list(
    function (data) {
      console.log("Success");

      BTPrinter.connect(
        function (data) {
          console.log("Success");
          alert(data);
        },
        function (err) {
          console.log("Error");
          alert(err);
        },
        check
      );
    },
    function (err) {
      console.log("Error");
      alert(err);
    }
  );
});

// STATUS
document.getElementById("status-btn").addEventListener("click", () => {
  BTPrinter.connected(
    function (data) {
      console.log("Success");
      if (data == "true") {
        alert("Printer is connected");
      } else {
        alert("Printer is not connected");
      }
    },
    function (err) {
      console.log("Error");
      alert(err);
    }
  );
});

// PRINT TEXT AND LOGO

// LOGO
var base64 = document.getElementById("txtBase64").value;

var items = [];
var x = "x";
let br1,
  br2,
  br3,
  br4,
  br5,
  br6,
  br7,
  br8,
  br9,
  br10,
  br11,
  br12,
  br13,
  br14,
  br15,
  br16,
  br17,
  br18,
  br19,
  br20;

var x1,
  x2,
  x3,
  x4,
  x5,
  x6,
  x7,
  x8,
  x9,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x16,
  x17,
  x18,
  x19,
  x20;
var qty = [];

firebase
  .database()
  .ref(localStorage.getItem("businessName") + "/Print/")
  .on("value", (snap) => {
    //   cordova run browser  cordova run android
    var v = snap.val();
    orderNo = v.OrderNumber;
    orderPlacedAt = v.DateTime;
    subTotal = v.Total;
    total = v.PlusVat;
    amountPaid1 = v.Payment1;
    amountPaid2 = v.Payment2;
    paidByCash = v.Cash;
    paidByCard = v.Card;
    change = v.Change.replace("-", "");

    items.push(
      v.Items[0],
      v.Items[1],
      v.Items[2],
      v.Items[3],
      v.Items[4],
      v.Items[5],
      v.Items[6],
      v.Items[7],
      v.Items[8],
      v.Items[9],
      v.Items[10],
      v.Items[11],
      v.Items[12],
      v.Items[13],
      v.Items[14],
      v.Items[15],
      v.Items[16],
      v.Items[17],
      v.Items[18],
      v.Items[19],
      v.Items[20],
      v.Items[21],
      v.Items[22],
      v.Items[23],
      v.Items[24],
      v.Items[25],
      v.Items[26],
      v.Items[27],
      v.Items[28],
      v.Items[29],
      v.Items[30],
      v.Items[31],
      v.Items[32],
      v.Items[33],
      v.Items[34],
      v.Items[35],
      v.Items[36],
      v.Items[37],
      v.Items[38],
      v.Items[39],
      v.Items[40],
      v.Items[41],
      v.Items[42],
      v.Items[43],
      v.Items[44],
      v.Items[45],
      v.Items[46],
      v.Items[47],
      v.Items[48],
      v.Items[49],
      v.Items[50],
      v.Items[51],
      v.Items[52],
      v.Items[53],
      v.Items[54],
      v.Items[55],
      v.Items[56],
      v.Items[57],
      v.Items[58],
      v.Items[59]
    );
    // Quantity Index

    // If any array index is undefined then assign as an empty.
    if (items[0] == undefined) {
      items[0] = "";
    }
    if (items[1] == undefined) {
      items[1] = "";
    }
    if (items[2] == undefined) {
      items[2] = "";
    }
    if (items[3] == undefined) {
      items[3] = "";
    }
    if (items[4] == undefined) {
      items[4] = "";
    }
    if (items[5] == undefined) {
      items[5] = "";
    }
    if (items[6] == undefined) {
      items[6] = "";
    }
    if (items[7] == undefined) {
      items[7] = "";
    }
    if (items[8] == undefined) {
      items[8] = "";
    }
    if (items[9] == undefined) {
      items[9] = "";
    }
    if (items[10] == undefined) {
      items[10] = "";
    }
    if (items[11] == undefined) {
      items[11] = "";
    }
    if (items[12] == undefined) {
      items[12] = "";
    }
    if (items[13] == undefined) {
      items[13] = "";
    }
    if (items[14] == undefined) {
      items[14] = "";
    }
    if (items[15] == undefined) {
      items[15] = "";
    }
    if (items[16] == undefined) {
      items[16] = "";
    }
    if (items[17] == undefined) {
      items[17] = "";
    }
    if (items[18] == undefined) {
      items[18] = "";
    }
    if (items[19] == undefined) {
      items[19] = "";
    }
    if (items[20] == undefined) {
      items[20] = "";
    }
    if (items[21] == undefined) {
      items[21] = "";
    }
    if (items[22] == undefined) {
      items[22] = "";
    }
    if (items[23] == undefined) {
      items[23] = "";
    }
    if (items[24] == undefined) {
      items[24] = "";
    }
    if (items[25] == undefined) {
      items[25] = "";
    }
    if (items[26] == undefined) {
      items[26] = "";
    }
    if (items[27] == undefined) {
      items[27] = "";
    }
    if (items[28] == undefined) {
      items[28] = "";
    }
    if (items[29] == undefined) {
      items[29] = "";
    }
    if (items[30] == undefined) {
      items[30] = "";
    }
    if (items[31] == undefined) {
      items[31] = "";
    }
    if (items[32] == undefined) {
      items[32] = "";
    }
    if (items[33] == undefined) {
      items[33] = "";
    }
    if (items[34] == undefined) {
      items[34] = "";
    }
    if (items[35] == undefined) {
      items[35] = "";
    }
    if (items[36] == undefined) {
      items[36] = "";
    }
    if (items[37] == undefined) {
      items[37] = "";
    }
    if (items[38] == undefined) {
      items[38] = "";
    }
    if (items[39] == undefined) {
      items[39] = "";
    }
    if (items[40] == undefined) {
      items[40] = "";
    }
    if (items[41] == undefined) {
      items[41] = "";
    }
    if (items[42] == undefined) {
      items[42] = "";
    }
    if (items[43] == undefined) {
      items[43] = "";
    }
    if (items[44] == undefined) {
      items[44] = "";
    }
    if (items[45] == undefined) {
      items[45] = "";
    }
    if (items[46] == undefined) {
      items[46] = "";
    }
    if (items[47] == undefined) {
      items[47] = "";
    }
    if (items[48] == undefined) {
      items[48] = "";
    }
    if (items[49] == undefined) {
      items[49] = "";
    }
    if (items[50] == undefined) {
      items[50] = "";
    }
    if (items[51] == undefined) {
      items[51] = "";
    }
    if (items[52] == undefined) {
      items[52] = "";
    }
    if (items[53] == undefined) {
      items[53] = "";
    }
    if (items[54] == undefined) {
      items[54] = "";
    }
    if (items[55] == undefined) {
      items[55] = "";
    }
    if (items[56] == undefined) {
      items[56] = "";
    }
    if (items[57] == undefined) {
      items[57] = "";
    }
    if (items[58] == undefined) {
      items[58] = "";
    }
    if (items[59] == undefined) {
      items[59] = "";
    }

    // If any of them is undefined return empty.
    if (paidByCash == undefined) {
      paidByCash = "";
    }
    if (paidByCard == undefined) {
      paidByCard = "";
    }

    if (items[0] == "") {
      x1 = "";
      br1 = "";
    } else {
      x1 = "x";
      br1 = "\n";
    }
    if (items[4] == "") {
      x2 = "";
      br2 = "";
    } else {
      x2 = "x";
      br2 = "\n";
    }
    if (items[7] == "") {
      x3 = "";
      br3 = "";
    } else {
      x3 = "x";
      br3 = "\n";
    }
    if (items[10] == "") {
      x4 = "";
      br4 = "";
    } else {
      x4 = "x";
      br4 = "\n";
    }
    if (items[13] == "") {
      x5 = "";
      br5 = "";
    } else {
      x5 = "x";
      br5 = "\n";
    }
    if (items[16] == "") {
      x6 = "";
      br6 = "";
    } else {
      x6 = "x";
      br6 = "\n";
    }
    if (items[19] == "") {
      x7 = "";
      br7 = "";
    } else {
      x7 = "x";
      br7 = "\n";
    }
    if (items[22] == "") {
      x8 = "";
      br8 = "";
    } else {
      x8 = "x";
      br8 = "\n";
    }
    if (items[25] == "") {
      x9 = "";
      br9 = "";
    } else {
      x9 = "x";
      br9 = "\n";
    }
    if (items[28] == "") {
      x10 = "";
      br10 = "";
    } else {
      x10 = "x";
      br10 = "\n";
    }
    if (items[31] == "") {
      x11 = "";
      br11 = "";
    } else {
      x11 = "x";
      br11 = "\n";
    }
    if (items[34] == "") {
      x12 = "";
      br12 = "";
    } else {
      x12 = "x";
      br12 = "\n";
    }
    if (items[37] == "") {
      x13 = "";
      br13 = "";
    } else {
      x13 = "x";
      br13 = "\n";
    }
    if (items[40] == "") {
      x14 = "";
      br14 = "";
    } else {
      x14 = "x";
      br14 = "\n";
    }
    if (items[43] == "") {
      x15 = "";
      br15 = "";
    } else {
      x15 = "x";
      br15 = "\n";
    }
    if (items[46] == "") {
      x16 = "";
      br16 = "";
    } else {
      x16 = "x";
      br16 = "\n";
    }
    if (items[49] == "") {
      x17 = "";
      br17 = "";
    } else {
      x17 = "x";
      br17 = "\n";
    }
    if (items[52] == "") {
      x18 = "";
      br18 = "";
    } else {
      x18 = "x";
      br18 = "\n";
    }
    if (items[55] == "") {
      x19 = "";
      br19 = "";
    } else {
      x19 = "x";
      br19 = "\n";
    }
    if (items[58] == "") {
      x20 = "";
      br20 = "";
    } else {
      x20 = "x";
      br20 = "\n";
    }

    // ORDER NUMBER
    BTPrinter.printTextSizeAlign(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },
      "      Order No " + orderNo,
      "10",
      "10"
    ); //string, size, align

    // LOGO
    BTPrinter.printBase64(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },
      base64,
      "0"
    );

    // BUSINESS NAME
    BTPrinter.printTextSizeAlign(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },
      "  " + localStorage.getItem("businessName"),
      "30",
      "30"
    ); //string, size, align
    // ADDRESS
    BTPrinter.printTextSizeAlign(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },
      "--------------------------------\n   " +
        localStorage.getItem("businessAddress"),
      "7",
      "7"
    ); //string, size, align
    // CONTACT
    BTPrinter.printTextSizeAlign(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },
      "           " + localStorage.getItem("businessContact"),
      "5",
      "0"
    ); //string, size, align

    // 20 LINES ONLY ON RECEIPT
    BTPrinter.printText(
      function (data) {
        console.log("Success");
      },
      function (err) {
        console.log("Error");
        alert(err);
      },

      "\nPlaced at: " +
        orderPlacedAt +
        "\n\n" +
        "QTY      " +
        "Eur        " +
        "ITEMS" +
        "\n\n" +
        x1 +
        items[1] +
        "       " +
        items[2] +
        "       " +
        items[0] +
        br1 +
        br1 +
        x2 +
        items[4] +
        "       " +
        items[5] +
        "       " +
        items[3] +
        br2 +
        br2 +
        x3 +
        items[7] +
        "       " +
        items[8] +
        "       " +
        items[6] +
        br3 +
        br3 +
        x4 +
        items[10] +
        "       " +
        items[11] +
        "       " +
        items[9] +
        br4 +
        br4 +
        x5 +
        items[13] +
        "       " +
        items[14] +
        "       " +
        items[12] +
        br5 +
        br5 +
        x6 +
        items[16] +
        "       " +
        items[17] +
        "       " +
        items[15] +
        br6 +
        br6 +
        x7 +
        items[19] +
        "       " +
        items[20] +
        "       " +
        items[18] +
        br7 +
        br7 +
        x8 +
        items[22] +
        "       " +
        items[23] +
        "       " +
        items[21] +
        br8 +
        br8 +
        x9 +
        items[25] +
        "       " +
        items[26] +
        "       " +
        items[24] +
        br9 +
        br9 +
        x10 +
        items[28] +
        "       " +
        items[29] +
        "       " +
        items[27] +
        br10 +
        br10 +
        x11 +
        items[31] +
        "       " +
        items[32] +
        "       " +
        items[30] +
        br11 +
        br11 +
        x12 +
        items[34] +
        "       " +
        items[35] +
        "       " +
        items[33] +
        br12 +
        br12 +
        x13 +
        items[37] +
        "       " +
        items[38] +
        "       " +
        items[36] +
        br13 +
        br13 +
        x14 +
        items[40] +
        "       " +
        items[41] +
        "       " +
        items[39] +
        br14 +
        br14 +
        x15 +
        items[43] +
        "       " +
        items[44] +
        "       " +
        items[42] +
        br15 +
        br15 +
        x16 +
        items[46] +
        "       " +
        items[47] +
        "       " +
        items[45] +
        br16 +
        br16 +
        x17 +
        items[49] +
        "       " +
        items[50] +
        "       " +
        items[48] +
        br17 +
        br17 +
        x18 +
        items[52] +
        "       " +
        items[53] +
        "       " +
        items[51] +
        br18 +
        br18 +
        x19 +
        items[55] +
        "       " +
        items[56] +
        "       " +
        items[54] +
        br19 +
        br19 +
        x19 +
        items[58] +
        "       " +
        items[59] +
        "       " +
        items[57] +
        br19 +
        br19 +
        "\n" +
        "Sub Total " +
        subTotal +
        "\nVAT " +
        vat +
        "\nTotal " +
        total +
        "\n--------------------------------\n" +
        "\nPaid by " +
        paidByCash +
        paidByCard +
        " " +
        amountPaid1 +
        "\nChange " +
        change +
        "\n--------------------------------\n" +
        "         COPY RECEIPT" +
        "\n--------------------------------" +
        "\n" +
        "          THANK YOU\n" +
        "      Please call again\n        RETAIN RECEIPT" +
        "\n--------------------------------" +
        "\n\n\n\n\n\n"
    );

    items = [];

    let timeout;
    clearArray();
    function clearArray() {
      timeout = setTimeout(clearAll, 5000);
    }

    function clearAll() {
      items = []; //Clear array after printing
    }
  });

// cordova run browser  cordova run android

document.getElementById("print-btn").addEventListener("click", () => {
  // LOGO
  BTPrinter.printBase64(
    function (data) {
      console.log("Success");
    },
    function (err) {
      console.log("Error");
      alert(err);
    },
    base64,
    "0"
  );

  // BUSINESS NAME
  BTPrinter.printTextSizeAlign(
    function (data) {
      console.log("Success");
    },
    function (err) {
      console.log("Error");
      alert(err);
    },
    "  " + localStorage.getItem("businessName"),
    "30",
    "30"
  ); //string, size, align
  // ADDRESS
  BTPrinter.printTextSizeAlign(
    function (data) {
      console.log("Success");
    },
    function (err) {
      console.log("Error");
      alert(err);
    },
    "--------------------------------\n   " +
      localStorage.getItem("businessAddress"),
    "7",
    "7"
  ); //string, size, align
  // CONTACT
  BTPrinter.printTextSizeAlign(
    function (data) {
      console.log("Success");
    },
    function (err) {
      console.log("Error");
      alert(err);
    },
    "           " + localStorage.getItem("businessContact"),
    "5",
    "0"
  ); //string, size, align

  BTPrinter.printText(
    function (data) {
      console.log("Success");
    },
    function (err) {
      console.log("Error");
      alert(err);
    },

    "   Placed at: " +
      dateTime +
      "\n\n" +
      "QTY      " +
      "Eur        " +
      "ITEMS" +
      "\n\n" +
      "tems  " +
      "       " +
      "item " +
      "       " +
      "item" +
      "\nTotal " +
      "10" +
      "\n--------------------------------\n" +
      "         COPY RECEIPT" +
      "\n--------------------------------" +
      "\n" +
      "          THANK YOU\n" +
      "      Please call again\n        RETAIN RECEIPT" +
      "\n--------------------------------" +
      "\n\n\n\n\n\n"
  );
});
document.getElementById("btnPrintBase64").addEventListener("click", () => {});
document.getElementById("qr-btn").addEventListener("click", () => {});
