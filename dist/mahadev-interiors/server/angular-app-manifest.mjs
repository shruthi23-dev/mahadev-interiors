
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mahadev-interiors/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MNJ3QBIV.js"
    ],
    "route": "/mahadev-interiors"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FI36WQSF.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LUVXL4L6.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/bedroom"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JNCNBJX5.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/pagekitchen"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PNMK235M.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/pagedinning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJMIIOIB.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/pagelivingroom"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VD7GD2TC.js",
      "chunk-HZUQUEQE.js"
    ],
    "route": "/mahadev-interiors/ourworks"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 701, hash: '5326696a7ba7545c7d4d5447cbe03c5f65cd626b7917e43fe286c0c264fb421f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'e903ada02e7edc9d6d1f87e9ad1d8f7bc347077291840a93282e28d4089e44c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'ourworks/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/ourworks_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pagelivingroom/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/pagelivingroom_index_html.mjs').then(m => m.default)},
    'bedroom/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/bedroom_index_html.mjs').then(m => m.default)},
    'pagedinning/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/pagedinning_index_html.mjs').then(m => m.default)},
    'pagekitchen/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/pagekitchen_index_html.mjs').then(m => m.default)},
    'styles-A6V4LWQS.css': {size: 66, hash: 'J+PF0fy2VPM', text: () => import('./assets-chunks/styles-A6V4LWQS_css.mjs').then(m => m.default)}
  },
};
