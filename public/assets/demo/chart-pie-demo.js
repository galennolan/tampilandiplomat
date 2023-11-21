// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["18-25th", "26-30th", "31-40th", "41-50th", ">50th"],
    datasets: [{
      data: [217, 1380, 203, 14, 0],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745','28a745'],
    }],
  },
});
