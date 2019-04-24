$(document).ready(function () {

  //handle event nav active 
  $('[data-parent="#menu-sidebar"]').on('hide.bs.collapse', function (e) {
    if ($(this).find('.nav-item--active').length > 0) {
      e.preventDefault();
    }
  });

  //sidebar collapse
  function sidebarCollapse() {
    $('.js-btn-collaspe').on('click', function () {
      $('.js-sidebar-collapse').toggleClass('aside-sidebar--visible');

      $('.js-overlay').fadeToggle('200');

      $('.js-overlay').on('click', function () {
        $('.js-sidebar-collapse').removeClass('aside-sidebar--visible');
        $(this).fadeOut();
      });
    })
  }
  sidebarCollapse();

  //PerfectScrollbar
  function perfectScrollbar(element) {
    if ($(element).length > 0) {
      new PerfectScrollbar(element, {
        wheelPropagation: false
      });
    }
  }

  perfectScrollbar(".js-scrollbar-1");
  perfectScrollbar(".js-scrollbar-2");
  perfectScrollbar(".js-scrollbar-menu");

  //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //datetimepicker
  $(".js-flatpickr").flatpickr({
    mode: "range",
    dateFormat: "Y-m-d"
  });

  // modal
  (function modalScrollable() {
    $('.modal').on('shown.bs.modal', function () {
      $(this).addClass('has-shown').find('.modal-body').trigger('scroll');
    });
    $('.modal-dialog-scrollable .modal-body').on('scroll', function () {
      var $elem = $(this);
      var elem = $elem[0];
      var isTop = $elem.scrollTop() === 0;
      var isBottom = elem.scrollHeight - $elem.scrollTop() === $elem.outerHeight();
      $elem.prev().toggleClass('modal-body--scrolled', isTop);
      $elem.next().toggleClass('modal-body--scrolled', isBottom);
    });
  })();

  //chart chartCompletionTask

  function drawCompletionTask(_data) {
    if ($('#completionTask').length > 0) {

      var _chart1 = new Chart(document.getElementById('completionTask'), {
        type: "bar",
        data: _data,
        options: {
          responsive: true,
          hover: {
            mode: 'nearest',
            intersect: true
          },
          maintainAspectRatio: false,
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
  }

  var dataCompletionTasks = $('#completionTask').attr('dataset');
  parseDataset = JSON.parse(dataCompletionTasks);
  drawCompletionTask(parseDataset);

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

  function drawAchievement(_data) {
    if ($('#achievement').length > 0) {
      var achievement = new Chart(document.getElementById('achievement'), {
        type: "bar",
        data: _data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            mode: 'index',
            intersect: true,
            callbacks: {
              label: function (a, e) {
                var t = e.datasets[a.datasetIndex].label || "",
                  o = a.yLabel,
                  r = "";
                return r += t + ': ' + o
              }
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: '#888c9b',
                maxRotation: 0
              },
              gridLines: {
                display: true,
                drawBorder: false,
                drawOnChartArea: false
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 20,
                fontColor: '#888c9b',
                beginAtZero: true
              },
              gridLines: {
                display: true,
                drawBorder: true,
                borderDash: [8, 2],
                color: "#e6edf7"
              }
            }]
          },
          legend: {
            display: false
          }
        }
      })
    }
  }
  var dataAchievement = $('#achievement').attr('dataset');
  datasetAchievement = JSON.parse(dataAchievement);
  console.log(datasetAchievement[0])
  drawAchievement(datasetAchievement[0]);

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

  // input file
  function inputFile() {
    $('.input-field--file .form-control').on('change', function (e) {
      var files = this.files;
      var fileLabel = $(this).next('.input-field__file-label');
      var labelText = fileLabel.text();

      fileLabel.text(files.length + ' files selected');

      if (files.length <= 2) {
        var fileNames = [];
        for (var i = 0; i < files.length; i++) {
          fileNames.push(files[i].name);
        }
        fileLabel.text(fileNames.join(', '));
      }
      if (!files.length) {
        fileLabel.text('Choose file');
      }
    });
  }

  inputFile();
});
