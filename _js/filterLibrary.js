;(function() {

	let filterlibrary = myForm.filterlibrary;

	function filterLibrary() {

		let libraryWrapper = $('.main-content__inside'),
			filterLibraryArray = [
				'district_krasnoglin',
				'district_promysh',
				'district_kirov',
				'district_lenin',
				'district_october',
				'district_railway',
				'district_samara',
				'district_soviet',
				'district_kuibishev']
			filterLibraryLi = $('.main-content__library')
		;

		let librarySelect = filterlibrary.options[filterlibrary.selectedIndex];

		function filterLibraryAction(libraryDistrict) {
			let filterLibraryFind = libraryWrapper.find(libraryDistrict);
			for(i = 0; i < filterLibraryFind.length; i++) {
				filterLibraryFind.removeClass('all-hidden').addClass('active');
				filterLibraryLi.not(libraryDistrict).removeClass('active').addClass('all-hidden');
			}
			// console.log(filterLibraryFind);
		}

		if(librarySelect.value == 'library_all') {
			filterLibraryAction('.main-content__library');

		} else if (librarySelect.value == filterLibraryArray[0]) {
			filterLibraryAction("." + filterLibraryArray[0]);

		} else if (librarySelect.value == filterLibraryArray[1]) {
			filterLibraryAction("." + filterLibraryArray[1]);

		} else if (librarySelect.value == filterLibraryArray[2]) {
			filterLibraryAction("." + filterLibraryArray[2]);

		} else if (librarySelect.value == filterLibraryArray[3]) {
			filterLibraryAction("." + filterLibraryArray[3]);

		} else if (librarySelect.value == filterLibraryArray[4]) {
			filterLibraryAction("." + filterLibraryArray[4]);

		} else if (librarySelect.value == filterLibraryArray[5]) {
			filterLibraryAction("." + filterLibraryArray[5]);

		} else if (librarySelect.value == filterLibraryArray[6]) {
			filterLibraryAction("." + filterLibraryArray[6]);

		} else if (librarySelect.value == filterLibraryArray[7]) {
			filterLibraryAction("." + filterLibraryArray[7]);

		} else if (librarySelect.value == filterLibraryArray[8]) {
			filterLibraryAction("." + filterLibraryArray[8]);
		}

		filterlibrary.addEventListener("change", filterLibrary);
	}

    function initPage() {
		filterLibrary();
    }

    function initPageMobile() {
		filterLibrary();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
		initPage();
    } else {
        initPageMobile();
    }

}(jQuery));