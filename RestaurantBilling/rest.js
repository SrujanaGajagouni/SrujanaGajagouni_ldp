const menuItems = [
    { id: 1, name: 'Biryani', type: 'main', price: 250.00 },
    { id: 2, name: 'Pizza', type: 'main', price: 199.00 },
    { id: 3, name: 'Salad', type: 'appetizer', price: 100 },
    { id: 4, name: 'Ice Cream', type: 'dessert', price: 120 },
    { id: 5, name: 'Spring Rolls', type: 'appetizer', price: 150 },
    { id: 6, name: 'Chicken Wings', type: 'appetizer', price: 200 },
    { id: 7, name: 'Coffee', type: 'beverage', price: 75 },
    { id: 8, name: 'Soft drinks', type: 'beverage', price: 80 },
    { id: 9, name: 'Smoothies', type: 'beverage', price: 100 },
    { id: 10, name: 'Tiramisu', type: 'dessert', price: 150 },
    { id: 11, name: 'Chocolate Cake', type: 'dessert', price: 100 },
    { id: 12, name: 'Apricot Delight', type: 'dessert', price: 150 },
  ];
  
  const tables = [
    { id: 1, name: 'Table 1', orders: [] },
    { id: 2, name: 'Table 2', orders: [] },
    { id: 3, name: 'Table 3', orders: [] },
    { id: 4, name: 'Table 4', orders: [] },
    { id: 5, name: 'Table 5', orders: [] },
  ];
  
  // Function to display menu items
  function displayMenuItems(items) {
    const menuItemsContainer = document.getElementById('menuItems');
    menuItemsContainer.innerHTML = '';
    items.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <div style="font-weight: bold; font-size: 18px; margin-bottom: 5px">${item.name}</div>
        <div> Rs ${item.price.toFixed(2)}</div>
      `;
      menuItem.setAttribute('data-item-id', item.id);
      menuItem.setAttribute('draggable', 'true');
      menuItem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(item));
      });
      menuItemsContainer.appendChild(menuItem);
    });
  }
  
  // Function to display tables
  function displayTables(tables) {
    const tableList = document.getElementById('tableList');
    tableList.innerHTML = '';
    tables.forEach(table => {
      const tableCard = document.createElement('div');
      tableCard.classList.add('table-card');
      const tablePrice = calculateTablePrice(table);
      const totalItems = calculateTotalItems(table);
      tableCard.innerHTML = `
        <div class="table-name">${table.name}</div>
        <div class="table-details">
          Rs. ${tablePrice.toFixed(2)} | Total items: ${totalItems}
        </div>
      `;
      tableCard.setAttribute('data-table-id', table.id);
  
      // Check if the table is selected and add the 'selected' class
      if (table.isSelected) {
        tableCard.classList.add('selected');
      }
  
      tableCard.addEventListener('click', function() {
        showTableDetails(table);
        const selectedTable = document.querySelector('.table-card.selected');
        if (selectedTable) {
          selectedTable.classList.remove('selected');
          tables.find(t => t.id === Number(selectedTable.getAttribute('data-table-id'))).isSelected = false;
        }
        tableCard.classList.add('selected');
        table.isSelected = true;
      });
  
      tableCard.addEventListener('dragover', function(event) {
        event.preventDefault();
      });
      tableCard.addEventListener('drop', function(event) {
        event.preventDefault();
        const item = JSON.parse(event.dataTransfer.getData('text/plain'));
        addItemToTable(table.id, item);
      });
  
      tableList.appendChild(tableCard);
    });
  }
  
  // Function to add item to a table
  function addItemToTable(tableId, item) {
    const table = tables.find(table => table.id === tableId);
    const existingOrder = table.orders.find(order => order.id === item.id);
    if (existingOrder) {
      existingOrder.quantity += 1;
    } else {
      table.orders.push({ ...item, quantity: 1 });
    }
    updateTableSummary(table);
  }
  
  // Function to update table summary on the card
  function updateTableSummary(table) {
    const tableCard = document.querySelector(`.table-card[data-table-id="${table.id}"]`);
    if (tableCard) {
      const tablePrice = calculateTablePrice(table);
      const totalItems = calculateTotalItems(table);
      tableCard.innerHTML = `
        <div class="table-name">${table.name}</div>
        <div class="table-details">
          Rs. ${tablePrice.toFixed(2)} | Total items: ${totalItems}
        </div>
      `;
      tableCard.setAttribute('data-table-id', table.id);
      tableCard.addEventListener('click', function() {
        openTableDetails(table);
        const selectedTable = document.querySelector('.table-card.selected');
        if (selectedTable) {
          selectedTable.classList.remove('selected');
        }
        tableCard.classList.add('selected');
      });
    }
  }
  
  // Function to show table details in a modal
  function openTableDetails(table) {
    const modal = document.getElementById('tableDetailsModal');
    const modalTitle = document.getElementById('tableModalTitle');
    const modalContent = document.getElementById('tableModalContent');
    const totalSumElement = document.getElementById('totalSum');
  
    modal.setAttribute('data-table-id', table.id); // Set data-table-id attribute
  
    modalTitle.textContent = table.name;
    modalContent.innerHTML = '';
  
    const orders = table.orders;
    if (orders.length === 0) {
      modalContent.innerHTML = '<p>No orders yet.</p>';
      totalSumElement.textContent = 'Total Sum: Rs. 0.00';
    } else {
      const orderTable = document.createElement('table');
      orderTable.classList.add('order-table');
      orderTable.innerHTML = `
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr>
              <td>${order.name}</td>
              <td>${order.price.toFixed(2)}</td>
              <td>
                <button class="quantity-btn" onclick="updateQuantity(${table.id}, ${order.id}, -1)">-</button>
                ${order.quantity}
                <button class="quantity-btn" onclick="updateQuantity(${table.id}, ${order.id}, 1)">+</button>
              </td>
              <td>${(order.price * order.quantity).toFixed(2)}</td>
              <td>
                <button class="delete-btn" onclick="deleteOrder(${table.id}, ${order.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      `;
  
      modalContent.appendChild(orderTable);
  
      const totalSum = calculateTablePrice(table);
      totalSumElement.textContent = `Total Sum: Rs. ${totalSum.toFixed(2)}`;
    }
  
    modal.style.display = 'block';
  }
  
  function closeTableDetailsModal() {
    const modal = document.getElementById('tableDetailsModal');
    modal.style.display = 'none';
  }
  
  // Function to update quantity of an order
  function updateQuantity(tableId, orderId, delta) {
    const table = tables.find(table => table.id === tableId);
    const order = table.orders.find(order => order.id === orderId);
    if (order) {
      order.quantity += delta;
      if (order.quantity === 0) {
        table.orders = table.orders.filter(order => order.id !== orderId);
      }
      updateTableSummary(table);
      openTableDetails(table);
    }
  }
  
  // Function to delete an order from a table
  function deleteOrder(tableId, orderId) {
    const table = tables.find(table => table.id === tableId);
    table.orders = table.orders.filter(order => order.id !== orderId);
    updateTableSummary(table);
    openTableDetails(table);
  }
  
  // Function to calculate total price for a table
  function calculateTablePrice(table) {
    return table.orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  }
  
  // Function to calculate total items for a table
  function calculateTotalItems(table) {
    return table.orders.reduce((total, order) => total + order.quantity, 0);
  }
  
  // Function to close session and generate bill
  function closeSessionAndGenerateBill() {
    const modal = document.getElementById('tableDetailsModal');
    const tableId = Number(modal.getAttribute('data-table-id'));
    const table = tables.find(table => table.id === tableId);
  
    if (table) {
      alert(`Bill for ${table.name}:\n\n${table.orders.map(order => `
        ${order.name} (x${order.quantity}) - Rs. ${(order.price * order.quantity).toFixed(2)}
      `).join('\n')}\n\nTotal: Rs. ${calculateTablePrice(table).toFixed(2)}`);
  
      table.orders = [];
      updateTableSummary(table);
      closeTableDetailsModal();
    }
  }
  
  // Function to filter tables by name
  function filterTables() {
    const searchValue = document.getElementById('searchTables').value.toLowerCase();
    const filteredTables = tables.filter(table => table.name.toLowerCase().includes(searchValue));
    displayTables(filteredTables);
  }
  
  // Function to filter menu items by name
  function filterMenuItems() {
    const searchValue = document.getElementById('searchMenu').value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchValue));
    displayMenuItems(filteredItems);
  }
  
  document.getElementById('searchTables').addEventListener('input', filterTables);
  document.getElementById('clearSearchTables').addEventListener('click', function() {
    document.getElementById('searchTables').value = '';
    filterTables();
  });
  
  document.getElementById('searchMenu').addEventListener('input', filterMenuItems);
  document.getElementById('clearSearchMenu').addEventListener('click', function() {
    document.getElementById('searchMenu').value = '';
    filterMenuItems();
  });
  
  // Initial display
  displayTables(tables);
  displayMenuItems(menuItems);
  