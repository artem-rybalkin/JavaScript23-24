define (
	'model',
	
	function (){
		function Model(data) {
			var self = this;
			self.data = data;

			self.addItem = function (item) {
				if (item.length === 0){
					return;
				}
				self.data.push(item);
				return self.data;
			};

			self.removeItem = function (item) {
				// сохраняем индекс элемента,который удаляем
				var index = self.data.indexOf(item);

				if (index === -1) {  //если такого индекса нет - ничего не делаем
					return;
				}
				self.data.splice(index, 1); //удаляем элемент из массива
				return self.data;
			};
			self.editItem = function (item2,input2) {
				var index2 = self.data.indexOf(item2);
				if (input2.length === 0){
					return;
				}
				self.data.splice(index2, 1, input2);
				// console.log(editedItem);
				// self.data.splice(index2, 1, input2);
				//  .text();  
				return self.data;
			};

		}
		return Model;
	}
);
