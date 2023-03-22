module.exports = {
    apps: [
        {
            name: 'api',
            script: './bin/www',
            env_production: {
                PORT: 8900,
            },
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
    ],
};
