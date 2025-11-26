(function () {
    if (document && document.documentElement) {
        document.documentElement.classList.add('standalone-js');
    }

    const ready = (cb) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', cb);
        } else {
            cb();
        }
    };

    const parseSettings = (raw) => {
        if (!raw) {
            return {};
        }
        try {
            const normalised = raw.replace(/&quot;/g, '"');
            return JSON.parse(normalised);
        } catch (err) {
            console.warn('Unable to parse widget settings', err);
            return {};
        }
    };

    const revealElement = (el) => {
        if (!el || !el.classList) {
            return;
        }
        if (el.classList.contains('elementor-invisible')) {
            el.classList.remove('elementor-invisible');
            el.classList.add('standalone-animated');
        }
    };

    const isInViewport = (el) => {
        if (!el || typeof el.getBoundingClientRect !== 'function') {
            return false;
        }
        const rect = el.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= viewHeight && rect.bottom >= 0;
    };

    const initReveals = () => {
        const elements = Array.from(document.querySelectorAll('.elementor-invisible'));
        if (!('IntersectionObserver' in window)) {
            elements.forEach(revealElement);
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    revealElement(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -20% 0px',
            threshold: 0.2
        });

        elements.forEach((el) => {
            if (isInViewport(el)) {
                revealElement(el);
            } else {
                observer.observe(el);
            }
        });
    };

    const initNavMenus = () => {
        const widgets = document.querySelectorAll('.elementor-widget-nav-menu');
        widgets.forEach((widget) => {
            const toggle = widget.querySelector('.elementor-menu-toggle');
            const container = widget.querySelector('.elementor-nav-menu__container');
            if (!toggle || !container) {
                return;
            }

            const closeMenu = () => {
                toggle.classList.remove('elementor-menu-toggle--active');
                toggle.setAttribute('aria-expanded', 'false');
                container.classList.remove('is-open');
            };

            const openMenu = () => {
                toggle.classList.add('elementor-menu-toggle--active');
                toggle.setAttribute('aria-expanded', 'true');
                container.classList.add('is-open');
            };

            toggle.addEventListener('click', (event) => {
                event.preventDefault();
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                if (expanded) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            document.addEventListener('click', (event) => {
                if (!widget.contains(event.target)) {
                    closeMenu();
                }
            });
        });
    };

    const initCarousels = () => {
        if (typeof window.Swiper === 'undefined') {
            console.warn('Swiper library is missing; carousels will be static.');
            return;
        }

        const widgets = document.querySelectorAll('.elementor-widget-loop-carousel .swiper');
        widgets.forEach((swiperContainer) => {
            if (swiperContainer.dataset.initialised === 'true') {
                return;
            }
            const widget = swiperContainer.closest('.elementor-widget-loop-carousel');
            const settings = widget ? parseSettings(widget.getAttribute('data-settings')) : {};
            const slidesDesktop = parseInt(settings.slides_to_show, 10) || 1;
            const slidesTablet = parseInt(settings.slides_to_show_tablet, 10) || slidesDesktop;
            const slidesMobile = parseInt(settings.slides_to_show_mobile, 10) || slidesTablet;
            const spacing = settings.image_spacing_custom ? parseInt(settings.image_spacing_custom.size, 10) || 0 : 0;
            const autoplayEnabled = settings.autoplay === 'yes';
            const autoplayDelay = parseInt(settings.autoplay_speed, 10) || 5000;
            const prev = widget ? widget.querySelector('.elementor-swiper-button-prev') : null;
            const next = widget ? widget.querySelector('.elementor-swiper-button-next') : null;
            const pagination = widget ? widget.querySelector('.swiper-pagination') : null;

            swiperContainer.dataset.initialised = 'true';
            swiperContainer.classList.add('is-ready');

            new window.Swiper(swiperContainer, {
                loop: settings.infinite === 'yes',
                speed: parseInt(settings.speed, 10) || 500,
                slidesPerView: slidesDesktop,
                spaceBetween: spacing,
                navigation: (prev && next) ? {
                    prevEl: prev,
                    nextEl: next
                } : undefined,
                pagination: pagination ? {
                    el: pagination,
                    clickable: true
                } : undefined,
                autoplay: autoplayEnabled ? {
                    delay: autoplayDelay,
                    disableOnInteraction: true
                } : undefined,
                breakpoints: {
                    0: {
                        slidesPerView: slidesMobile
                    },
                    768: {
                        slidesPerView: slidesTablet
                    },
                    1025: {
                        slidesPerView: slidesDesktop
                    }
                }
            });
        });
    };

    const initClientMarquee = () => {
        const marqueeInner = document.querySelector('.elementor-element-135a09a .e-con-inner');
        if (!marqueeInner || marqueeInner.dataset.marqueeReady === 'true') {
            return;
        }

        marqueeInner.dataset.marqueeReady = 'true';
        const marqueeWrapper = marqueeInner.parentElement;
        if (marqueeWrapper) {
            marqueeWrapper.classList.add('standalone-marquee');
        }
        marqueeInner.classList.add('standalone-marquee-track');

        const originals = Array.from(marqueeInner.children);
        if (originals.length > 0) {
            const duration = Math.max(16, originals.length * 3);
            marqueeInner.style.setProperty('--standalone-marquee-duration', `${duration}s`);
        }

        originals.forEach((node) => {
            const clone = node.cloneNode(true);
            clone.classList.remove('elementor-invisible', 'standalone-animated');
            clone.removeAttribute('data-id');
            clone.querySelectorAll('.elementor-invisible').forEach((child) => {
                child.classList.remove('elementor-invisible', 'standalone-animated');
            });
            marqueeInner.appendChild(clone);
        });
    };

    const initStickyHeader = () => {
        const header =
            document.querySelector('[data-elementor-type="header"] .vamtam-sticky-header:not(.vamtam-sticky-header--spacer)') ||
            document.querySelector('[data-elementor-type="header"] .elementor-element:not(.elementor-hidden-desktop)');
        if (!header) {
            return;
        }

        const spacer =
            document.querySelector('.vamtam-sticky-header.vamtam-sticky-header--spacer') ||
            header.parentElement?.querySelector('.standalone-header-spacer');

        header.classList.remove('vamtam-sticky-header--fixed-shown', 'vamtam-sticky-header--fixed-hidden');
        header.classList.add('standalone-header');
        document.body.classList.add('standalone-header-ready');
        if (spacer) {
            spacer.classList.add('standalone-header-spacer');
        }

        const syncSpacer = () => {
            const height = header.offsetHeight;
            document.body.style.setProperty('--standalone-header-height', `${height}px`);
            if (spacer) {
                spacer.style.height = `${height}px`;
            }
        };

        syncSpacer();
        window.addEventListener('resize', () => {
            window.requestAnimationFrame(syncSpacer);
        });

        let lastY = window.scrollY || 0;
        let ticking = false;

        const showHeader = () => {
            header.classList.remove('is-hidden');
        };

        const hideHeader = () => {
            header.classList.add('is-hidden');
        };

        const update = () => {
            const currentY = window.scrollY || 0;
            const delta = currentY - lastY;
            const threshold = 5;

            if (currentY <= 20 || delta < -threshold) {
                showHeader();
            } else if (delta > threshold) {
                hideHeader();
            }

            lastY = currentY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        }, {
            passive: true
        });

        update();
    };

    ready(() => {
        initReveals();
        initNavMenus();
        initCarousels();
        initClientMarquee();
        initStickyHeader();
    });
})();
