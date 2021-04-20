(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      navigations: [{
        text: 'Inicio',
        routeName: 'Home'
      }],
      profile: ['Perfil', 'Cerrar Sesión']
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['user'])),
  methods: {
    logoutUser: function logoutUser() {
      this.$store.commit('logoutUser');
    }
  },
  name: 'Layout'
});

/***/ }),

/***/ "./resources/js/views/Layout.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Layout.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6a4bdfee&scoped=true& */ "./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/views/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a4bdfee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Layout.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=6a4bdfee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("nav", { staticClass: "bg-gray-800" }, [
      _c("div", { staticClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
        _c("div", { staticClass: "flex items-center justify-between h-16" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "hidden md:block" }, [
            _c(
              "div",
              { staticClass: "ml-10 flex items-baseline space-x-4" },
              _vm._l(_vm.navigations, function(item, itemIdx) {
                return _c(
                  "div",
                  { key: itemIdx },
                  [
                    itemIdx === 0
                      ? [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",
                              attrs: { to: { name: item.routeName } }
                            },
                            [_vm._v(_vm._s(item.text))]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hidden md:block" }, [
            _c("div", { staticClass: "ml-4 flex items-center md:ml-6" }, [
              _c(
                "button",
                {
                  staticClass:
                    "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none\n                          focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                },
                [
                  _c("span", {
                    staticClass: "sr-only",
                    domProps: { textContent: _vm._s("Favoritos") }
                  }),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d:
                            "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969\n                      0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538\n                      1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1\n                      1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-3 flex relative" }, [
                _c("div", { staticClass: "md:ml-6" }, [
                  _c("div", { staticClass: "flex relative" }, [
                    _c("div", { staticClass: "md:ml-2" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none\n                            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("Abrir el menu de usuario")
                          ]),
                          _vm._v(" "),
                          _c(
                            "svg",
                            {
                              staticClass: "h-6 w-6 text-white",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d:
                                    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "md:ml-4" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                        },
                        [_vm._v(_vm._s(_vm.user ? _vm.user.name : null))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md:ml-6" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none\n                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                      on: { click: _vm.logoutUser }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Cerrar Sesión")
                      ]),
                      _vm._v(" "),
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 text-white",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("header", { staticClass: "bg-white shadow" }, [
      _c(
        "div",
        { staticClass: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" },
        [
          _c("h1", {
            staticClass: "text-3xl font-bold text-gray-900",
            domProps: { textContent: _vm._s("API") }
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("main", [
      _c("div", { staticClass: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" }, [
        _c("div", { staticClass: "px-4 py-6 sm:px-0" }, [
          _c(
            "div",
            {
              staticClass:
                "border-4 border-dashed border-gray-200 rounded-lg h-auto"
            },
            [_c("router-view")],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://www.freeiconspng.com/img/45354",
            title: "Image from freeiconspng.com"
          }
        },
        [
          _c("img", {
            staticClass: "w-20",
            attrs: {
              src:
                "https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png",
              width: "350",
              alt: "3D Pokeball Pokémon Go Png"
            }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);