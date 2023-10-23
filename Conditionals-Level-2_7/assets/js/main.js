"use strict";

function showtxt() {
  const select = document.body.querySelector("#mylist");
  const output = document.body.querySelector("#masse");

  switch (Number(select.value)) {
    case 0:
      output.textContent =
        "Brief und Postkarte L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm ";
      break;
    case 1:
      output.textContent = "DHL Paket 2 kg bis 60 x 30 x 15 cm";
      break;
    case 2:
      output.textContent = "DHL Paket 5 kg bis 120 x 60 x 60 cm";
      break;
    case 3:
      output.textContent = "DHL Paket 10 kg bis 120 x 60 x 60 cm";
      break;
    default:
      output.textContent = "Extra große Größe";
  }
}
