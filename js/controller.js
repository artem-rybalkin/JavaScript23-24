define (
	'controller', //название модуля
	['model', 'view'],  //от каких фацлов зависит
	function(){   //тело функции
		function Controller(model, view) {
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item-edit', editItem);
			function addItem() {

				var newItem = view.elements.input.val();

				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}
			function editItem() {
				var item2 = $(this).attr('data-value');
				var editedItem = prompt("Edit item in the list", item2);
				
				model.editItem(item2,editedItem);
				view.renderList(model.data);
			}
		}
	return Controller;
	}
);


