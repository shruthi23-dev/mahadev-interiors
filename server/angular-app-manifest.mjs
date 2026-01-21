
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mahadev-interiors/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVHY5HN6.js"
    ],
    "route": "/mahadev-interiors"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-66VZLWGM.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7CELSVEC.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/bedroom"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3YMDK5QE.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/pagekitchen"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I7SSQ36W.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/pagedinning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KD7SU4ZK.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/pagelivingroom"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VHAB262K.js",
      "chunk-JZPPYGKC.js"
    ],
    "route": "/mahadev-interiors/ourworks"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 701, hash: '2139f3e7bcbd1c579e75838370a702b2425280abb527719dd27759116b7a9182', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'a00e7ccaf5ba8bbe3193bb5659510ac15a91963cfec493ab6b9a4fd29c2fbc0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4021, hash: '823bfd548f126016533f7481a0651331e7f6755b148ad35ae7c0d6ab772b2917', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ourworks/index.html': {size: 19793, hash: '64b4e8a57562431ee58e93d372d35339e3f71d0a207304a379f7cee098c199ea', text: () => import('./assets-chunks/ourworks_index_html.mjs').then(m => m.default)},
    'pagelivingroom/index.html': {size: 19347, hash: 'e69461c9348d0139a350dad88f3d8e996ba35537993cc410a4c9fee12ae53aa6', text: () => import('./assets-chunks/pagelivingroom_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 47543, hash: '894bdfa8fb22fec37951cd671754ad3b345797a24891e714721f9c7c47d52ec2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'pagedinning/index.html': {size: 16549, hash: '8c02429a37a62487855bca83983e968a20ba6862af442507f93d8f122a16103c', text: () => import('./assets-chunks/pagedinning_index_html.mjs').then(m => m.default)},
    'pagekitchen/index.html': {size: 16981, hash: 'fba06516ffbd8ebb1f26fd53bd2df25b4d8481b5c8caaf821ab9de4f111c6734', text: () => import('./assets-chunks/pagekitchen_index_html.mjs').then(m => m.default)},
    'bedroom/index.html': {size: 20914, hash: '4dd76f8e970cc53af4fc6af7336e23298b5237990cd107c8a8f3358afcc43f67', text: () => import('./assets-chunks/bedroom_index_html.mjs').then(m => m.default)},
    'styles-A6V4LWQS.css': {size: 66, hash: 'J+PF0fy2VPM', text: () => import('./assets-chunks/styles-A6V4LWQS_css.mjs').then(m => m.default)}
  },
};
