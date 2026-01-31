/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

(() => {
    const track = document.querySelector('.hero-track');
    const slides = track.children;
    const prev = document.querySelector('.hero-nav.prev');
    const next = document.querySelector('.hero-nav.next');
    const dots = document.querySelectorAll('.hero-dots .dot');

    let index = 0;
    let startX = 0;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    next.onclick = () => {
        index = (index + 1) % slides.length;
        update();
    };

    prev.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
    };

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            index = i;
            update();
        };
    });

    // Swipe support
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) next.onclick();
        if (diff < -50) prev.onclick();
    });
})();