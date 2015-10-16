//chart injected into the customerRepsIndex template

Template.branchIndex.helpers({
  topGenresChart: function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            //text: this.username + " Most Surveyed Branches"
            text: "CIBC Most Surveyed Branches"
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'branch',
            data: [
                ['Bay/Dundas',   45.0],
                ['Commerce Court',       26.8],
                ['Queens Street',   12.8],
                ['Ranee Ave',    8.5],
                ['Bayveiw Village',     6.2]
            ]
        }]
    };
  }
});
