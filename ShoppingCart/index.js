
$(document).ready(function () {
  let quantity = document.querySelector("#numb");
  let basket = document.querySelector(".quantity");
  let number;
  let a = 0;
  var addItem = function (name, cost) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $('#shop').prepend('<div class="row item"> \
      <h3 class="total"> \ Item | '
      + name + '\
      </h3> \
      <h2 class="total"> \
      Price | $' + cost + '.00 \
      </h2> \
      <h2 class="total">Total | $0.00</h2> \
      <h2 class="left"> \
        QTY</h2> \
        <div class="buttons"> \
        <i class="bi bi-dash-lg minus"></i> \
        <div class="quantity">0</div> \
        <i class="bi bi-plus-lg add"></i> \
        </div> \
        <button class="remove">Remove from List</button> \
        </div> \
      ');
  }

  $(document).on('click', '#addToList', function () {
    addItem($('#item-input').val(), $('#item-amount').val());
  });

  $(document).on('click', '.remove', function () {
    $(this).parents('.row').remove();
    sum();
  });

  $(document).on('click', '.minus', function () {
    quantity.innerHTML--;
    basket.innerHTML--;
    console.log(quantity);
  })

  $(document).on('click', '.add', function () {
    quantity.innerHTML++;
    basket.innerHTML++;
  })

});





