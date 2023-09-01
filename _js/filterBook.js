;(function() {

	let filterbook = myForm.filterbook;

	// HTMLSelectElement.selectedIndex показывает порядковый номер первого выбранного элемента <option>.
	// Значение -1 означает, что ни один из элементов не выбран.
	// var index = selectElem.selectedIndex;
	// selectElem.selectedIndex = index;

	// http://e-javascript.ru/select.php?pp=10
	// http://old.code.mu/books/javascript/dom/raznye-poleznye-temy-javascript.html

	// <p id="p">Индекс выбранного элемента: 0</p>

	// <select id="select">
	//   <option selected>Option A</option>
	//   <option>Option B</option>
	//   <option>Option C</option>
	//   <option>Option D</option>
	//   <option>Option E</option>
	// </select>

	// var selectElem = document.getElementById('select')
	// var pElem = document.getElementById('p')

	// // Когда выбран новый элемент <option>
	// selectElem.addEventListener('change', function() {
	//   var index = selectElem.selectedIndex;
	//   // Добавить данные в <p>
	//   pElem.innerHTML = 'selectedIndex: ' + index;
	// })

	function filterRead() {

		let readBookWrapper = $('#readGridder'),
			filterBookArray = [
				"read_detective",
				"read_fantasy",
				"read_adventure",
				"read_sceince",
				"read_history",
				"read_present",
				"read_helplife",
				"read_child",
				"read_love",
				"read_tomyself",
				"read_classic"],
			filterBookLi = $('#readGridder > li')
		;

		let readBookSelect = filterbook.options[filterbook.selectedIndex];
		// readBookWrapper.textContent = "Вы выбрали: " + readBookSelect.text;

		function filterBookAction(filterBook) {
			let filterBookFind = readBookWrapper.find(filterBook);
			for(i = 0; i < filterBookFind.length; i++) {
				filterBookFind.removeClass('all-hidden').addClass('active');
				filterBookLi.not(filterBook).removeClass('active').addClass('all-hidden');
			}
			// console.log(filterBookFind);
		}

		// Фильтр Все
		if(readBookSelect.value == 'read_all') {
			filterBookAction('.main-content__read-single--all');

		// Фильтр Детективы
		} else if (readBookSelect.value == filterBookArray[0]) {
			filterBookAction("." + filterBookArray[0]);

		// Фильтр Фэнтези
		} else if (readBookSelect.value == filterBookArray[1]) {
			filterBookAction("." + filterBookArray[1]);

		// Фильтр Приключения
		} else if (readBookSelect.value == filterBookArray[2]) {
			filterBookAction("." + filterBookArray[2]);

		// Фильтр Наука
		} else if (readBookSelect.value == filterBookArray[3]) {
			filterBookAction("." + filterBookArray[3]);

		// Фильтр История
		} else if (readBookSelect.value == filterBookArray[4]) {
			filterBookAction("." + filterBookArray[4]);

		// Фильтр Настоящее
		} else if (readBookSelect.value == filterBookArray[5]) {
			filterBookAction("." + filterBookArray[5]);

		// Фильтр Жизнь
		} else if (readBookSelect.value == filterBookArray[6]) {
			filterBookAction("." + filterBookArray[6]);

		// Фильтр Семья
		} else if (readBookSelect.value == filterBookArray[7]) {
			filterBookAction("." + filterBookArray[7]);

		// Фильтр Любовь
		} else if (readBookSelect.value == filterBookArray[8]) {
			filterBookAction("." + filterBookArray[8]);

		// Фильтр Помощь себе
		} else if (readBookSelect.value == filterBookArray[9]) {
			filterBookAction("." + filterBookArray[9]);

		// Фильтр Классика
		} else if (readBookSelect.value == filterBookArray[10]) {
			filterBookAction("." + filterBookArray[10]);
		}

		filterbook.addEventListener("change", filterRead);

	}

    function initPage() {
		filterRead();
    }

    function initPageMobile() {
		filterRead();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
		initPage();
    } else {
        initPageMobile();
    }

}(jQuery));