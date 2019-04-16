$(document).ready(function () {
  //PerfectScrollbar
  new PerfectScrollbar(".js-scrollbar-1", {
    wheelPropagation: true
  });
  new PerfectScrollbar(".js-scrollbar-2", {
    wheelPropagation: true
  });
  new PerfectScrollbar(".js-scrollbar-menu", {
    wheelPropagation: true
  });

  //main-menu
  $('.js-nav-item').on('click', function(){
    var isExpand = $(this).find(' > .nav-link').attr('aria-expanded');
    // var isExpand = $(this).children('.nav-link').attr('aria-expanded');
    console.log(isExpand);
    
    $(this).toggleClass('nav-item--has-open', isExpand);
  })
  // [aria-expanded=true]
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
