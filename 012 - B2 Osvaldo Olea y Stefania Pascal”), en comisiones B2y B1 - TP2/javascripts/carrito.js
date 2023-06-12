document.addEventListener("DOMContentLoaded", function() {
    const itemTableBody = document.querySelector("#item-table tbody");
    const addItemForm = document.querySelector("#add-item-form");
    const addMultipleItemsButton = document.querySelector("#add-multiple-items");
    const clearTableButton = document.querySelector("#clear-table");
  
    let items = [];
  
    // Cargar datos precargados en la tabla
    const preloadedItems = [
      { name: "Mancuernas 8 kilos", price: 1000, quantity: 5 },
      { name: "Colchoneta", price: 1500, quantity: 3 },
      { name: "Soga", price: 1100, quantity: 2 }
    ];
    items = [...preloadedItems];
  
    // Mostrar los elementos precargados en la tabla
    preloadedItems.forEach(item => {
      addItemToTable(item);
    });
  
    // Agregar un elemento al arreglo y a la tabla
    addItemForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.querySelector("#name").value;
      const price = parseFloat(document.querySelector("#price").value);
      const quantity = parseInt(document.querySelector("#quantity").value);
  
      const item = { name, price, quantity };
      items.push(item);
  
      addItemToTable(item);
  
      addItemForm.reset();
    });
  
    // Agregar múltiples elementos automáticamente
    addMultipleItemsButton.addEventListener("click", function() {
      const multipleItems = [
        { name: "Mancuernas 1 kilo", price: 250, quantity: 4 },
        { name: "PMancuernas 2 kilos", price: 300, quantity: 1 },
        { name: "Mancuernas 3 kilos", price: 350, quantity: 6 }
      ];
  
      multipleItems.forEach(item => {
        items.push(item);
        addItemToTable(item);
      });
    });
  
    // Vaciar la tabla
    clearTableButton.addEventListener("click", function() {
      items = [];
      itemTableBody.innerHTML = "";
    });
  
    // Agregar un elemento a la tabla
    function addItemToTable(item) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
      `;
      itemTableBody.appendChild(row);
    }
  });
  