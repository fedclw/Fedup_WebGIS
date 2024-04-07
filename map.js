
window._AMapSecurityConfig = {
    securityJsCode: "e6fd1181345c4e553709b0578b10f4e4",
};

AMapLoader.load({
        key: "7bc8348f02d505a889e483270635178f", //申请好的Web端开发者 Key，调用 load 时必填
        version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    })
    .then((AMap) => {
        const map1 = new AMap.Map("map");
            // 创建地点标记
        const marker = new AMap.Marker({
            position: [116.397428, 39.90923], // 位置
            title: "北京" // 标题
        });
        const map2 = new AMap.Map("map2");
        const marker2 = new AMap.Marker({
            position: [110.405285, 39.904989], // 位置
        })
        map2.add(marker2);
        map1.add(marker);
    })
    .catch((e) => {
        console.error(e); //加载错误提示
    });