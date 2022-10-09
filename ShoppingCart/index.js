
$(document).ready(function () {
    var addItem = function (name, cost) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        $('#shop').prepend('<div class="row item"> \
      <h3> \ '
            + name + '\
      </h3> \
      <h2> \
        $' + cost + '.00 \
      </h2> \
      <h2 class="left"> \
        QTY</h2> \
        <div class="buttons"> \
        <i class="bi bi-dash-lg"></i> \
        <div class="quantity">0</div> \
        <i class="bi bi-plus-lg"></i> \
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




});