'use strict';

require('./prism');

/**
 * Wrap classes between parenthesis `( )`
 */
Prism.hooks.add('before-insert', function(env) {
	return env.highlightedCode = env.highlightedCode.replace(/\(\s([\w\s\-\/\+]*)\s\)/g, '<span class="irrelevant">$1</span>');
});


/**
 * Global `fabricator` object
 * @namespace
 */
var fabricator = window.fabricator = {};


/**
 * Default options
 * @type {Object}
 */
fabricator.options = {
	toggles: {
		labels: true,
		notes: true,
		code: false
	},
	menu: false,
	mq: '(min-width: 60em)'
};

// open menu by default if large screen
fabricator.options.menu = window.matchMedia(fabricator.options.mq).matches;

/**
 * Feature detection
 * @type {Object}
 */
fabricator.test = {};

// test for sessionStorage
fabricator.test.sessionStorage = (function () {
	var test = '_f';
	try {
		sessionStorage.setItem(test, test);
		sessionStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}());

// create storage object if it doesn't exist; store options
if (fabricator.test.sessionStorage) {
	sessionStorage.fabricator = sessionStorage.fabricator || JSON.stringify(fabricator.options);
}


/**
 * Cache DOM
 * @type {Object}
 */
fabricator.dom = {
	root: document.querySelector('html'),
	primaryMenu: document.querySelector('.f-menu'),
	menuItems: document.querySelectorAll('.f-menu li a'),
	menuToggle: document.querySelector('.f-menu-toggle')
};


/**
 * Get current option values from session storage
 * @return {Object}
 */
fabricator.getOptions = function () {
	return (fabricator.test.sessionStorage) ? JSON.parse(sessionStorage.fabricator) : fabricator.options;
};


/**
 * Add `f-active` class to active menu item
 */
fabricator.setActiveItem = function () {

	/**
	 * Match the window location with the menu item, set menu item as active
	 */
	var setActive = function () {

		// get current file and hash without first slash
		var current = (window.location.pathname + window.location.hash).replace(/^\//g, ''),
			href;

		// find the current section in the items array
		for (var i = fabricator.dom.menuItems.length - 1; i >= 0; i--) {

			var item = fabricator.dom.menuItems[i];

			// get item href without first slash
			href = item.getAttribute('href').replace(/^\//g, '');

			if (href === current) {
				item.classList.add('f-active');
			}
			else {
				item.classList.remove('f-active');
			}

		}

	};

	window.addEventListener('hashchange', setActive);

	setActive();

	return this;

};


/**
 * Click handler to primary menu toggle
 * @return {Object} fabricator
 */
fabricator.menuToggle = function () {

	// shortcut menu DOM
	var toggle = fabricator.dom.menuToggle;

	var options = fabricator.getOptions();

	// toggle classes on certain elements
	var toggleClasses = function () {
		options.menu = !fabricator.dom.root.classList.contains('f-menu-active');
		fabricator.dom.root.classList.toggle('f-menu-active');

		if (fabricator.test.sessionStorage) {
			sessionStorage.setItem('fabricator', JSON.stringify(options));
		}
	};

	// toggle classes on click
	toggle.addEventListener('click', function () {
		toggleClasses();
	});

	// close menu when clicking on item (for collapsed menu view)
	var closeMenu = function () {
		if (!window.matchMedia(fabricator.options.mq).matches) {
			toggleClasses();
		}
	};

	for (var i = 0; i < fabricator.dom.menuItems.length; i++) {
		fabricator.dom.menuItems[i].addEventListener('click', closeMenu);
	}

	return this;

};


/**
 * Handler for preview and code toggles
 * @return {Object} fabricator
 */
fabricator.allItemsToggles = function () {

	var items = {
		labels: document.querySelectorAll('[data-f-toggle="labels"]'),
		notes: document.querySelectorAll('[data-f-toggle="notes"]'),
		code: document.querySelectorAll('[data-f-toggle="code"]')
	};

	var toggleAllControls = document.querySelectorAll('.f-controls [data-f-toggle-control]');

	var options = fabricator.getOptions();

	// toggle all
	var toggleAllItems = function (type, value) {

		var button = document.querySelector('.f-controls [data-f-toggle-control=' + type + ']'),
			_items = items[type];

		for (var i = 0; i < _items.length; i++) {
			if (value) {
				_items[i].classList.remove('f-item-hidden');
			} else {
				_items[i].classList.add('f-item-hidden');
			}
		}

		// toggle styles
		if (value) {
			button.classList.add('f-active');
		} else {
			button.classList.remove('f-active');
		}

		// update options
		options.toggles[type] = value;

		if (fabricator.test.sessionStorage) {
			sessionStorage.setItem('fabricator', JSON.stringify(options));
		}

	};

	for (var i = 0; i < toggleAllControls.length; i++) {

		toggleAllControls[i].addEventListener('click', function (e) {

			// extract info from target node
			var type = e.currentTarget.getAttribute('data-f-toggle-control'),
				value = e.currentTarget.className.indexOf('f-active') < 0;

			// toggle the items
			toggleAllItems(type, value);

		});

	}

	// persist toggle options from page to page
	for (var toggle in options.toggles) {
		if (options.toggles.hasOwnProperty(toggle)) {
			toggleAllItems(toggle, options.toggles[toggle]);
		}
	}

	return this;

};


/**
 * Handler for single item code toggling
 */
fabricator.singleItemToggle = function () {

	var itemToggleSingle = document.querySelectorAll('.f-item-group [data-f-toggle-control]');

	// toggle single
	var toggleSingleItemCode = function (e) {
		var group = this.parentNode.parentNode,
			type = e.currentTarget.getAttribute('data-f-toggle-control');

		group.querySelector('[data-f-toggle=' + type + ']').classList.toggle('f-item-hidden');
	};

	for (var i = 0; i < itemToggleSingle.length; i++) {
		itemToggleSingle[i].addEventListener('click', toggleSingleItemCode);
	}

	return this;

};


/**
 * Open/Close menu based on session var.
 * Also attach a media query listener to close the menu when resizing to smaller screen.
 */
fabricator.setInitialMenuState = function () {

	// root element
	var root = document.querySelector('html');

	var mq = window.matchMedia(fabricator.options.mq);

	// if small screen
	var mediaChangeHandler = function (list) {
		if (!list.matches) {
			root.classList.remove('f-menu-active');
		} else {
			if (fabricator.getOptions().menu) {
				root.classList.add('f-menu-active');
			} else {
				root.classList.remove('f-menu-active');
			}
		}
	};

	mq.addListener(mediaChangeHandler);
	mediaChangeHandler(mq);

	return this;

};


/**
 * Initialization
 */
(function () {

	// invoke
	fabricator
		.setInitialMenuState()
		.menuToggle()
		.allItemsToggles()
		.singleItemToggle()
		.setActiveItem();

}());
