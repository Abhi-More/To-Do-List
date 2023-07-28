update();
function getAndupdate(){
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null){
      itemsJsonArray = [];
      if(tit == "" && desc == ""){}
      else{
      itemsJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
      }
    }
    else{
      if(tit == "" && desc == ""){
        alert("Please Enter something..!")
      }
      else{
      itemsJsonArrayStr = localStorage.getItem('itemsJson');
      itemsJsonArray = JSON.parse(itemsJsonArrayStr);
      itemsJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
      }

    }
    update();
}
function update()
{
if(localStorage.getItem('itemsJson')==null){
      itemsJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
      itemsJsonArrayStr = localStorage.getItem('itemsJson');
      itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    }
    //populate the table
    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemsJsonArray.forEach((element, index) => {
      str += `
      <tr>
      <th scope="row">${index+1}</th>
      <td>${element[0]}</td>
      <td>${element[1]}</td>
      <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</td>
      </tr>`;
      
    });
    
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    tableBody.innerHTML = str;
}
add=document.getElementById("add");
add.addEventListener("click", getAndupdate);
// update();
function deleted(itemIndex)
{
  itemsJsonArrayStr = localStorage.getItem('itemsJson');
  itemsJsonArray = JSON.parse(itemsJsonArrayStr);

  itemsJsonArray.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  update();
}

function clearStorage()
{
  if(confirm("Do you really want to clear?")){
    localStorage.clear();
    update();
  }
}
