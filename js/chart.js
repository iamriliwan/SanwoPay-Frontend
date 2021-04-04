let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1', '5', '7', '13', '17', '21', '27'],
        datasets: [{
            label: '',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            data: [200, 80, 100, 80, 250, 100, 200]
        }]
    },

    // Configuration options go here
    options: {}
});
