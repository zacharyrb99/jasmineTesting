// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// append delete button and click handler for removing server from allServers and DOM td
function appendDeleteButton(tr, type) {
  let newTd = document.createElement('td');
  newTd.className = 'deleteButton';
  newTd.innerText = 'delete';

  newTd.addEventListener('click', removeDeleteButton);

  tr.append(newTd);
}

function removeDeleteButton(e) {
  let deleteButton = e.target.closest('tr');

  delete allServers[deleteButton.id];

  deleteButton.parentNode.removeChild(deleteButton);
  updateServerTable();
}