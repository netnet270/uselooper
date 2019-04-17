$(document).ready(function () {
  
  //PerfectScrollbar

  function perfectScrollbar(element){
    new PerfectScrollbar(element, {
      wheelPropagation: true
    });
  }

  perfectScrollbar(".js-scrollbar-1");
  perfectScrollbar(".js-scrollbar-2");
  perfectScrollbar(".js-scrollbar-menu");

  //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //chart chartCompletionTask
  (function chartCompletionTask() {

    function drawCompletionTask(_data) {
      var _chart1 = new Chart(document.getElementById('completionTask'), {
        type: "bar",
        data: _data,
        options: {
          responsive: true,
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: '#888c9b',
                maxRotation: 0,
                maxTicksLimit: 4
              },
              gridLines: {
                display: true,
                drawBorder: false,
                drawOnChartArea: false
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 100,
                fontColor: '#888c9b',
                beginAtZero: true
              },
              gridLines: {
                display: true,
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      })
    }

    var dataCompletionTasks = {
      labels: ["21 Mar", "22 Mar", "23 Mar", "24 Mar", "25 Mar", "26 Mar", "27 Mar"],
      datasets: [{
        data: [155, 65, 465, 265, 225, 325, 80],
        backgroundColor: "#346cb0",
        borderColor: "#346cb0"
      }]
    }
    drawCompletionTask(dataCompletionTasks);
})();

//chart Tasks Performance
  $('[data-toggle="easypiechart"]').each(function () {
    var selector = this;
    var options = $(selector).data();

    options.barColor = options.barColor;
    options.trackColor = options.trackColor;
    options.scaleColor = options.scaleColor || 'transparent';
    options.lineWidth = options.lineWidth ? parseInt(options.lineWidth) : 8;
    options.size = options.size ? parseInt(options.size) : 120;
    options.rotate = options.rotate ? parseInt(options.rotate) : 0;
    options.trackColor = options.trackColor == 'false' || options.trackColor == '' ? false : options.trackColor;
    options.scaleColor = options.scaleColor == 'false' || options.scaleColor == '' ? false : options.scaleColor;
    $(selector).easyPieChart(options);
  });

  //input Number
  function inputNumber() {

    $('.js-input-number').each(function () {
      var spinner = $(this);
      var input = spinner.children('.form-control[type="number"]');
      var min = parseFloat(input.attr('min'));
      var max = parseFloat(input.attr('max'));
      var btnUp = $('.js-btn-up');
      var btnDown = $('.js-btn-down');
      var newVal = 0;

      btnUp.on('click', function () {
        var oldValue = parseFloat(input.val()) || 0;
        newVal = oldValue >= max ? oldValue : oldValue + 1;
        input.val(newVal).trigger('change');
      });

      btnDown.on('click', function () {
        var oldValue = parseFloat(input.val()) || 0;
        newVal = oldValue <= min ? oldValue : oldValue - 1;
        input.val(newVal).trigger('change');
      });
    })
  }

  inputNumber();

  function inputClearable() {

    var toggleClear = function toggleClear(input) {
      var isEmpty = !$(input).val();
      var clearable = $(input).parent().children('.close');
      clearable.toggleClass('show', !isEmpty);
    };

    $('.js-input-clearable').each(function () {
      var $input = $(this).children('.form-control');
      toggleClear($input);

      $input.on('keyup', function () {
        toggleClear(this);
      })

      $(this).children('.close').on('click', function () {
        $input.val('').focus();
        $input.trigger('keyup');
      })
    })
  }

  inputClearable();

  function togglePassword() {
    $('.js-toggle-icon').on('click', function () {
      var $input = $(this).parents('.form-customize').find('input');
      var isPassword = $input.is('[type="password"]');
      var inputType = isPassword ? 'text' : 'password';
      var triggerText = isPassword ? 'Hide' : 'Show';
      var iconToggle = isPassword ? 'fa fa-fw fa-eye-slash' : 'fa fa-eye fa-fw';
      $(this).children().first().attr('class', iconToggle);
      $(this).children('span').text(triggerText);
      $input.attr('type', inputType);
    })
  }

  togglePassword();

  function placeholderShown() {
    $('.input-label > input').on('focus blur keyup change', function () {
      this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
    })
    $('.input-label > input').trigger('change');
  }

  placeholderShown();
});
