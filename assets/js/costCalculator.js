let propertytype;
let cost;
let inputcost;
let min = true;
let max = false;
let avg = false;

function setMin() {
  min = document.getElementById("formCheck-1").value;
  max = !document.getElementById("formCheck-1").value;
  avg = !document.getElementById("formCheck-1").value;

  document.getElementById("formCheck-2").checked = false;
  document.getElementById("formCheck-3").checked = false;

  calculateCost();
}
function setAvg() {
  min = !document.getElementById("formCheck-2").value;
  max = !document.getElementById("formCheck-2").value;
  avg = document.getElementById("formCheck-2").value;

  document.getElementById("formCheck-1").checked = false;
  document.getElementById("formCheck-3").checked = false;
  calculateCost();
}
function setMax() {
  min = !document.getElementById("formCheck-3").value;
  max = document.getElementById("formCheck-3").value;
  avg = !document.getElementById("formCheck-3").value;

  document.getElementById("formCheck-2").checked = false;
  document.getElementById("formCheck-1").checked = false;
  calculateCost();
}

function onResidential() {
  document.getElementById("propertycategory-dropdown").innerHTML =
    "Residential";
  document
    .getElementById("propertysubcategory-label")
    .classList.remove("d-none");
  document.getElementById("residential-dropdown").classList.remove("d-none");
  document.getElementById("office-dropdown").classList.add("d-none");
  document.getElementById("retail-dropdown").classList.add("d-none");
  document.getElementById("industrial-dropdown").classList.add("d-none");
}
function onOffice() {
  document.getElementById("propertycategory-dropdown").innerHTML = "Offices";
  document
    .getElementById("propertysubcategory-label")
    .classList.remove("d-none");
  document.getElementById("office-dropdown").classList.remove("d-none");
  document.getElementById("residential-dropdown").classList.add("d-none");
  document.getElementById("retail-dropdown").classList.add("d-none");
  document.getElementById("industrial-dropdown").classList.add("d-none");
}
function onRetail() {
  document.getElementById("propertycategory-dropdown").innerHTML = "Retail";

  document
    .getElementById("propertysubcategory-label")
    .classList.remove("d-none");
  document.getElementById("retail-dropdown").classList.remove("d-none");
  document.getElementById("residential-dropdown").classList.add("d-none");
  document.getElementById("office-dropdown").classList.add("d-none");
  document.getElementById("industrial-dropdown").classList.add("d-none");
}

function onIndustrial() {
  document.getElementById("propertycategory-dropdown").innerHTML = "Industrial";

  document
    .getElementById("propertysubcategory-label")
    .classList.remove("d-none");
  document.getElementById("industrial-dropdown").classList.remove("d-none");
  document.getElementById("office-dropdown").classList.add("d-none");
  document.getElementById("retail-dropdown").classList.add("d-none");
  document.getElementById("residential-dropdown").classList.add("d-none");
}

function onRDP() {
  document.getElementById("residential-dropdown").innerHTML = "RDP";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "rdp";
  calculateCost();
}
function onLowCost() {
  document.getElementById("residential-dropdown").innerHTML = "Low-Cost";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "lowcost";
  calculateCost();
}
function onSimpleLowRise() {
  document.getElementById("residential-dropdown").innerHTML = "Low-Rise";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "lowrise";
  calculateCost();
}
function onHighRiseApartment() {
  document.getElementById("residential-dropdown").innerHTML =
    "High-Rise Appartment";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "highrise";
  calculateCost();
}
function onDuplex() {
  document.getElementById("residential-dropdown").innerHTML = "Duplex";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "duplex";
  calculateCost();
}
function onPrestige() {
  document.getElementById("residential-dropdown").innerHTML = "Prestige";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "prestige";
  calculateCost();
}
function onhousesEcon() {
  document.getElementById("residential-dropdown").innerHTML = "Houses (Econ)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesecon";
  calculateCost();
}
function housesStandard() {
  document.getElementById("residential-dropdown").innerHTML =
    "Houses (Standard)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesstandard";
  calculateCost();
}
function housesMiddle() {
  document.getElementById("residential-dropdown").innerHTML = "Houses (Middle)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesmiddle";
  calculateCost();
}
function housesLuxury() {
  document.getElementById("residential-dropdown").innerHTML = "Houses (Luxury)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesluxury";
  calculateCost();
}
function housesExclusive() {
  document.getElementById("residential-dropdown").innerHTML =
    "Houses (Exclusive)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesexclusive";
  calculateCost();
}
function housesExceptional() {
  document.getElementById("residential-dropdown").innerHTML = "Houses (Exept)";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "housesexceptional";
  calculateCost();
}

// offices

function officePark() {
  document.getElementById("office-dropdown").innerHTML = "Office Park";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "officePark";
  calculateCost();
}
function prestigiousOffice() {
  document.getElementById("office-dropdown").innerHTML = "Prestigious Office";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "prestigiousOffice";
  calculateCost();
}
function towerBlock() {
  document.getElementById("office-dropdown").innerHTML = "Tower Block";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "towerBlock";
  calculateCost();
}
function prestigiousTower() {
  document.getElementById("office-dropdown").innerHTML =
    "Prestigious Tower Block";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "prestigiousTower";
  calculateCost();
}

// retail
function localConvenience() {
  document.getElementById("retail-dropdown").innerHTML = "Local Convenience";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "localConvenience";
  calculateCost();
}
function neighbourhoodcentres() {
  document.getElementById("retail-dropdown").innerHTML =
    "Neighbourhood Centres";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "neighbourhoodcentres";
  calculateCost();
}
function communitycentres() {
  document.getElementById("retail-dropdown").innerHTML = "Community Centres";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "communitycentres";
  calculateCost();
}
function minorregional() {
  document.getElementById("retail-dropdown").innerHTML = "Minor Regional";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "minorregional";
  calculateCost();
}
function regionalcentres() {
  document.getElementById("retail-dropdown").innerHTML = "Regional Centres";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "regionalcentres";
  calculateCost();
}
function lightDuty() {
  document.getElementById("industrial-dropdown").innerHTML = "Light Duty";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "lightDuty";
  calculateCost();
}

function heavyDuty() {
  document.getElementById("industrial-dropdown").innerHTML = "Heavy Duty";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "heavyDuty";
  calculateCost();
}

function roomBlock() {
  document.getElementById("industrial-dropdown").innerHTML = "Room Block";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "roomBlock";
  calculateCost();
}

function coldStorage() {
  document.getElementById("industrial-dropdown").innerHTML = "Cold Storage";
  document.getElementById("esm-label").classList.remove("d-none");
  document.getElementById("esm-input").classList.remove("d-none");
  document.getElementById("esm-button").classList.remove("d-none");
  document.getElementById("priceRange-label").classList.remove("d-none");
  document.getElementById("priceRange-box").classList.remove("d-none");
  document.getElementById("lowbutton").classList.remove("d-none");
  document.getElementById("avgbutton").classList.remove("d-none");
  document.getElementById("maxbutton").classList.remove("d-none");

  propertytype = "coldStorage";
  calculateCost();
}

function calculateCost() {
  switch (propertytype) {
    case "rdp":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 2500;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 2600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 2700;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "lowcost":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 3200;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 4350;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5500;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "lowrise":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8100;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9560;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 11020;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "highrise":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 14190;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 18215;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 22240;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "duplex":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9150;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9610;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 10070;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "prestige":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9680;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12270;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 14860;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesecon":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesstandard":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 7600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 7600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 7600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesmiddle":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8800;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8800;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8800;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesluxury":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesexclusive":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 18840;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 18840;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 18840;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "housesexceptional":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 28500;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 43750;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 59000;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "officePark":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8430;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9160;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9890;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "prestigiousOffice":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9850;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 10960;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12070;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "towerBlock":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12090;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 15840;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 13965;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "prestigiousTower":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 15940;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 18925;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 21910;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "localConvenience":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 10900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "neighbourhoodcentres":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9000;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 10300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 11600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "communitycentres":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 11300;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12700;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "minorregional":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 10900;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12200;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 13500;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "regionalcentres":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 11600;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 12800;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 14000;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "superregional":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 13650;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 14550;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 15450;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "lightDuty":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 4780;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 6190;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5485;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "heavyDuty":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5370;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 5995;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 6620;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "roomBlock":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 6963;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 8000;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 9038;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    case "coldStorage":
      if (min) {
        document.getElementById("formCheck-1").checked = true;
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 15225;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else if (avg) {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 19206;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      } else {
        inputcost = document.getElementById("esm-input").value;
        cost = inputcost * 23188;
        document.getElementById(
          "final-cost"
        ).innerHTML = `R ${cost.toLocaleString("hu-HU")}`;
      }
      break;
    default:
      document.getElementById("final-cost").innerHTML = "Amount invalid";
      break;
  }
}
