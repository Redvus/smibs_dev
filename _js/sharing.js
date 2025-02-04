function sharingText() {

	/* Get Text
	-------------------------------------------------- */
	function getHighlight() {

		let selection = window.getSelection(); // 1.

		let object = {
			parent : null,
			text   : '',
			rect   : null
		};

		// If selection is not empty.
		if (selection.rangeCount > 0) {
			object = {
				text   : selection.toString().trim(), // get the text.
				parent : selection.anchorNode.parentNode, // get the element wrapping the text.
				rect   : selection.getRangeAt(0).getBoundingClientRect() // get the bounding box.
			};
		}

		return object; // 2.
	}

	/* Show Menu
	-------------------------------------------------- */
	let sharing = document.querySelector('.sharing');

	function showMenu() {
		// 1.
		let highlight = getHighlight();

		// 2.
		if (highlight.text === '') {
			sharing.setAttribute('class', 'sharing');
			sharing.style.left = 0;
			sharing.style.top  = 0;
			return;
		}

		// 3.
		/* Only show the sharing button if the selected is a paragraph. */
		// if ( highlight.parent.nodeName !== 'P' ) {
		// 	return;
		// }

		// 4.
		let width = ( highlight.rect.width / 2 ) - 42;

		sharing.setAttribute( 'class', 'sharing sharing--shown' );
		sharing.style.left = ( highlight.rect.left + width ) + 'px';
		sharing.style.top  = ( highlight.rect.top - 40 ) + 'px';
		/**
		 * "40" is the height of our sharing buttons.
		 * Herein, we lift it up above the higlighted area top position.
		 */
	}

	document.body.addEventListener('mouseup', function() {
		setTimeout(showMenu, 100);
	});

	function openShareWindow(url, w, h) {

		let screenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		let screenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
		let width = window.innerWidth ? window.innerWidth : doc.documentElement.clientWidth ? doc.documentElement.clientWidth : screen.width;
		let height = window.innerHeight ? window.innerHeight : doc.documentElement.clientHeight ? doc.documentElement.clientHeight : screen.height;

		let left = ( ( width / 2 ) - ( w / 2 ) ) + screenLeft;
		let top = ( ( height / 2 ) - ( h / 2 ) ) + screenTop;

		let newWin = window.open( url, "", "scrollbars=no,width=" + w + ",height=" + h + ",top=" + top + ",left=" + left );

		if ( newWin ) {
			newWin.focus();
		}
	}

	/* Click Facebook
	-------------------------------------------------- */
	// document.getElementById('shareTextFacebook').addEventListener('click', function(e) {

	// 	let highlight = getHighlight();

	// 	if (highlight.text !== '' && highlight.parent.nodeName === 'P') {
	// 		// FB.ui({
	// 		// 	method : 'share',
	// 		// 	mobile_iframe: true,
	// 		// 	href   : 'https://smibs.ru',
	// 		// 	quote  : highlight.text // pass the text as Quote
	// 		// });
	// 		let docURL = encodeURIComponent( 'https://smibs.ru' );
	// 		let facebookText = encodeURIComponent( highlight.text );
	// 		let facebookURL = 'https://www.facebook.com/share.php?u=' + docURL + '&display=popup' + '&caption=' + facebookText;

	// 		openShareWindow(facebookURL, 600, 420);
	// 	}

	// 	e.preventDefault();
	// });

	/* Click Twitter
	-------------------------------------------------- */
	// document.getElementById('shareTextTweet').addEventListener('click', function(e) {

	// 	let highlight = getHighlight();

	// 	if (highlight.text !== '' && highlight.parent.nodeName === 'P' ) {

	// 		let docURL = encodeURIComponent( 'https://smibs.ru' );
	// 		let tweetText = encodeURIComponent( highlight.text );
	// 		let tweetURL = 'https://twitter.com/intent/tweet?via=wdtuts&url=' + docURL + '&text=' + tweetText;

	// 		openShareWindow(tweetURL, 600, 420);
	// 	}

	// 	e.preventDefault();
	// });

	/* Click Telegram
	-------------------------------------------------- */
	// document.getElementById('shareTextTelegram').addEventListener('click', function(e) {

	// 	let highlight = getHighlight();

	// 	if (highlight.text !== '' && highlight.parent.nodeName === 'P' ) {

	// 		let docURL = encodeURIComponent( 'https://smibs.ru' );
	// 		let telegramText = encodeURIComponent( highlight.text );
	// 		let telegramURL = 'https://www.telegram.me/share/share/?url=' + docURL + '&text=' + telegramText;

	// 		openShareWindow(telegramURL, 600, 420);
	// 	}

	// 	e.preventDefault();
	// });

	/* Click VK
	-------------------------------------------------- */
	document.getElementById('shareTextVK').addEventListener('click', function(e) {

		let highlight = getHighlight();

		if (highlight.text !== '' && highlight.parent.nodeName === 'P' ) {

			let docURL = encodeURIComponent( 'https://smibs.ru' );
			let vkText = encodeURIComponent( highlight.text );
			let vkURL = 'https://vk.com/share.php?url=' + docURL + '&text=' + vkText;

			openShareWindow(vkURL, 600, 420);
		}

		e.preventDefault();
	});

	/* Copy Selection Link
	-------------------------------------------------- */
	// TODO https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/

	document.getElementById( 'shareTextLink' ).addEventListener( 'click', function (e) {

		let highlight = getHighlight();

		if (highlight.text !== '' && highlight.parent.nodeName === 'P') {
			// document.execCommand('copy');
			navigator.clipboard
				.readText()
				.then((clipText) => (document.getElementById("outbox").innerText = clipText));
		}

		let sharingButtons = document.querySelector('.sharing__buttons');
		let shareCopyLink = document.createElement('span');
		shareCopyLink.className = 'sharing__copy';
		shareCopyLink.appendChild(document.createTextNode('Скопировано'));
		sharingButtons.appendChild(shareCopyLink);

		function removeSpan() {
			sharingButtons.removeChild(shareCopyLink);
		}

		setTimeout(removeSpan, 1000);

		e.preventDefault();
	} );
}

// sharingText();