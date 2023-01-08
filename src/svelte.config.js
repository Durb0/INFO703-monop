const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
        pug: {},
        scss: {
            includePaths: ['src'],
        },
        postcss: {
            plugins: [require('autoprefixer')],
        },
        typescript: {
        }
    })
}

