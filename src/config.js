require.config({
    baseUrl: 'src',
    deps: ['main'],
    enforceDefine: true,
    paths: {
        'knockout': '../external/knockout',
        'smokesignals': '../external/smokesignals',
        'text': '../external/text',
        'views': '../views'
    },
    shim: {
        'smokesignals': {
            exports: 'smokesignals'
        }
    }
});

define();