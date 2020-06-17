import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 85wlTCZEAi5y9HM3vaH8VvtlV_ArdULFqfpLN85RWy0Vw22aJkH_2pmo8RPfTMQMbw0FUtdVZlZSGe7v0pRVuD3Gdk-tIRuMvEUhC2yWCOB_tr0l9XVrS9lJE-rnXnYx'
    }
})

