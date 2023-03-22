"use strict";
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 5182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/AshtonBennett_minimalistic_logo.ico-removebg-preview.61e7b26f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlUlEQVR42mNAB+X6DIwMJIPFOd5gXXPSXLw3FvvagNjTU92YwJIz46zAklvzXST6Iy1rqn2N5y5IsJEFibUHmTAx5LnoM4M4yXbaufV+xgmh5uqTgOwmkFimky5YjmFSrL1ApJVWBAMDO5eOioJcpKVGbmeYhQgDDDQGWbIwoIHJMbbM6GKMea76jAGm6owMbKJMMEEAByge8GC1VBIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/icons/AshtonBennett_minimalistic_logo.ico-removebg-preview.png
var AshtonBennett_minimalistic_logo_ico_removebg_preview = __webpack_require__(5182);
;// CONCATENATED MODULE: ./public/icons/burgerboy.png
/* harmony default export */ const burgerboy = ({"src":"/_next/static/media/burgerboy.55567bc7.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXrzMLry8Lry8Hqy8HrzMLqzMLrzMLqzMHry8Lry8Hqy8HrzMLqzMLry8Lqy8LrzMLrzMLry8Lqy8HrzMHqzMHrzMLqy8Hry8Lqy8HrzMLqy8LrzMLry8Lqy8Hry8Lry8Lqy8Hry8Lqy8LroB86AAAAI3RSTlMAAAAAGhobGxsbGxwcHBwlJycnampsbG1tbm5vb29wcnJzc2/GNs0AAAA8SURBVHjaNclBCoAwEATB6U0weBbx/78UdXeEQG4FJdGgKThGWfCyjZyIIu3E/VolohQF524L7v58WJR/CMEZTwEUKRYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/cancel.png
/* harmony default export */ const cancel = ({"src":"/_next/static/media/cancel.dfea3cb3.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXrzMLqzMLry8Hqy8HrzMLqzMHqy8HrzMLry8LrzMLrzMHqzMLqy8HrzMLry8Hqy8Lry8Lqy8Lqy8HrzMLqy8LrzMLrzMHrzMLqzMLqy8EkC+UcAAAAGnRSTlMAAAAABQUFGhohISEhKSkpt7e3ubm8vMPDwwEra1AAAAA/SURBVHjaBUALFoAQEJwadolF+dX9L9rDNIrQJuoTD8RWgbRVdwI8dQylhzD0HihAflW/DJSWeF53wTI4B1s/W1UChrsK/sEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/header/NavMenu.js


function NavMenu({ toggleNavMenu , displayNavMenu  }) {
    const [show, setShow] = (0,external_react_.useState)(displayNavMenu);
    (0,external_react_.useEffect)(()=>{
        if (displayNavMenu) {
            setShow(true);
        }
    }, [
        displayNavMenu
    ]);
    const handleAnimation = ()=>{
        if (!displayNavMenu) {
            setShow(false);
        }
    };
    return show && /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onAnimationEnd: handleAnimation,
        className: `${displayNavMenu ? "navMenuStyleSlideIn" : "navMenuStyleSlideOut"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "navMenuStyle ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "navList",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#header",
                            onClick: toggleNavMenu,
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#about",
                            onClick: toggleNavMenu,
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#projects",
                            onClick: toggleNavMenu,
                            children: "Blogs"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#blogs",
                            onClick: toggleNavMenu,
                            children: "Story"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#contact",
                            onClick: toggleNavMenu,
                            children: "Contact"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "/assets/ashton.bennett.resume.pdf",
                            target: "_blank",
                            children: [
                                "R\xe9sum\xe9",
                                " "
                            ]
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/Header.js








function Header({ displayHamburgerNav , setDisplayHamburgerNav , currentSection , setCurrentSection , setSectionToFadeOut  }) {
    const [displayNavMenu, setdisplayNavMenu] = (0,external_react_.useState)(false);
    const handleLogoClick = async ()=>{
        setDisplayHamburgerNav(true);
        await setSectionToFadeOut(currentSection);
        const currentCheckedRadio = document.querySelector(`input[value="${currentSection}"]`);
        currentCheckedRadio.removeAttribute("checked");
        location.assign("/#about");
        document.querySelector(`input[value="about"]`).checked = true;
        setCurrentSection("about");
    };
    const toggleNavMenu = ()=>{
        if (displayNavMenu === true) {
            return setdisplayNavMenu(false);
        }
        setdisplayNavMenu(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                id: "header",
                className: "row header spaceBetween ",
                children: [
                    !displayNavMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/#about",
                                className: "row",
                                onClick: ()=>handleLogoClick(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        priority: true,
                                        src: AshtonBennett_minimalistic_logo_ico_removebg_preview/* default */.Z,
                                        className: "aLogo ",
                                        alt: "Ashton Bennett Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "smallTextHeader",
                                        className: "smallFontSize movingToLeft increaseFontWeight",
                                        children: "shton Bennett"
                                    })
                                ]
                            }),
                            displayHamburgerNav && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                id: "hamburgerIcon",
                                className: "icon marginRight",
                                onClick: toggleNavMenu,
                                priority: true,
                                src: burgerboy,
                                alt: "hamburger icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "movingToLeft ",
                                id: "resumeLink",
                                href: "/assets/ashton.bennett.resume.pdf",
                                target: "_blank",
                                children: "R\xe9sum\xe9"
                            })
                        ]
                    }),
                    displayNavMenu && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "icon right",
                        onClick: toggleNavMenu,
                        priority: true,
                        src: cancel,
                        alt: "cancel icon"
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {
                toggleNavMenu: toggleNavMenu,
                displayNavMenu: displayNavMenu
            })
        ]
    });
}


/***/ })

};
;