// 配置文件
fis.match('*', {
    release: '/sumin/$0' // 所有资源发布时产出到 /static 目录下
});


fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

//预处理less文件
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css',
});