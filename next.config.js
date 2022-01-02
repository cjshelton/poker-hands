const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */
module.exports = withPreact({
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
});
