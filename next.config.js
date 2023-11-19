module.exports ={
    appDir: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {fs: false};
        return config;
    },
    compiler: {
        styledComponents: true
    },
    compilerOptions: {
        useUnknownInCatchVariables: false,
    },
    experimental: {
        serverComponentsExternalPackages: ['sequelize'],
    }
};
