import VueAMap from 'vue-amap';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: '1ecc980127d3*****798a0eb7fa7bc32',  // 设置 key ，没有申请 高德地图申请 key 
    plugin: [
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.PolyEditor',
        'AMap.CircleEditor',
        'AMap.MouseTool',
        'AMap.Geolocation',
    ],
    v: '1.4.15',
    uiVersion: '1.0.11'
})

