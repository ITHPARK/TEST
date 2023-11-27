const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        jsApi: './src/Project/resource/study/js/jsApi.js',
    },
    output: {
        filename: 'bundle.js', // 모든 엔트리 포인트에 대한 번들 이름을 'bundle.js'로 통일
        path: path.resolve(__dirname, 'dist'),
    },
};


//webpack?

//다수의 js파일을 하나의 js 파일로 코드를 압축하여 만들어 주는것
//css, image, html 을 모듈로 로드 할 수 있다.

