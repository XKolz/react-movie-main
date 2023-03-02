const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    //apiKey: 'get from themoviedb.org',
    //baseUrl: 'https://api.themoviedb.org/3/movie/popular?api_key=${a9f88e2c96c4b2b70999575be087dceb}',
    apiKey: 'a9f88e2c96c4b2b70999575be087dceb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;