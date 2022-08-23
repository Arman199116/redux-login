function submitForm() {
   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 500);
    })
}

const getData = async (days) => {
    var options = {
        method: "GET",
        headers: {
            'Accept': "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    };
    await submitForm();
    console.log('fetch data ' +  days);
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=1`, options);
    let value = await response.json();

    return value;
};

export default getData;
