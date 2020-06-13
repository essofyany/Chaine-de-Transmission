const ctx1 = document.getElementById('message').getContext('2d');
const ctx2 = document.getElementById('code-en-ligne').getContext('2d');


//message generator chart 
const msgGenerator = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: labelCode('binarySequanceLabel'),
        datasets: [{
            fill: false,
            steppedLine: true,
            label: 'Digital signal',
            data: binarySequence,
            borderColor: 'rgba(255, 99, 22, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        },
        tooltips: {
            enabled: false,
        }
    }
});

// code en ligne onClick
const nrzBtn = document.getElementById('nrz');
const biphaserBtn = document.getElementById('biphaser');
const bipolairBtn = document.getElementById('bipolair');

nrzBtn.addEventListener('click', ()=> {
    const myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelCode('nrzLabel'),
            datasets: [{
                fill: false,
                steppedLine: true,
                label: 'code NRZ',
                data: nrzCode,
                borderColor: 'rgba(220, 10, 0, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            tooltips: {
                enabled: false,
            }
        }
    });

});

biphaserBtn.addEventListener('click', ()=> {
    const myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelCode('biphaseLabel'),
            datasets: [{
                fill: false,
                steppedLine: true,
                label: 'code biphaser',
                data: biphaserCode,
                borderColor: 'rgba(0, 100, 205, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            tooltips: {
                enabled: true,
            }
        }
    });
});

bipolairBtn.addEventListener('click', ()=> {
    const myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelCode('bipolairLabel'),
            datasets: [{
                fill: false,
                steppedLine: true,
                label: 'code bipolair',
                data: bipolairCode,
                borderColor: 'rgba(255,165,0, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            tooltips: {
                enabled: false,
            }
        }
    });
});

