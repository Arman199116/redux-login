export const dataLabel = {
    addData: function (val) {
        let data = [];
        return {
            labels: val.prices.map((price) => { data.push(price[1] / 1000); return price[0] }),
            datasets: [{
                label: undefined,
                data: data,
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 280);
                    gradient.addColorStop(0, "#CDCDCD");
                    gradient.addColorStop(1, 'rgba(254,254,254, 0.6)');

                    return gradient;
                },
                borderColor: "#16C784",
                borderWidth: 1,

            }]
        }
    }
}