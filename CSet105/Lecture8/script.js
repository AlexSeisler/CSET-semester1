const form = document.querySelector('#theForm');

form.addEventListener('submit', function(event)
{
  event.preventDefault();
  let amount = (document.getElementById("amount").value);
  var table = document.getElementById("myTable");
  table.innerHTML = "";
  for(let i = 1;i<=amount;i++)
  {
    const newRow = table.insertRow();
    for(let j = 1;j<=amount;j++)
    {
      const newCell = newRow.insertCell();
      newCell.textContent = i*j;
    }
  }
});

