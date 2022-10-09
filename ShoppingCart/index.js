
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

    // var sortItem = function () {
    //     var prices = $('.item-amount');
    //     var names = $('.item-input');
    //     var priceName = [];
    //     for (i = 0; i < prices.length; i++) {
    //         var price = $(prices[i]).text().trim();
    //         var name = $(names[i]).text().trim();
    //         priceName.push([name, price]);
    //     }
    //     priceName.sort();
    //     console.log(priceName);
    //     for (i = 0; i < priceName.length; i++) {
    //         $($('.item-input')[i]).text(priceName[i][0]);
    //         $($('.item-amount')[i]).text(priceName[i][1]);
    //     }
    // }

    // var removeItem = function() {
    //   this.parents('.row').remove();
    // }

    $(document).on('click', '#addToList', function () {
        addItem($('#item-input').val(), $('#item-amount').val());
    });

    $(document).on('click', '.remove', function () {
        $(this).parents('.row').remove();
        sum();
    });

    // $('input').keydown(function (e) {

    //     if (e.which == 13) {
    //         sum();
    //     };
    // });

    // $(document).on('keyup', '.quantity', function () {
    //     sum();
    // });

    // $(document).on('keydown', '#cost', function (e) {

    //     if (e.which == 13) {
    //         addItem($('#name').val(), $('#cost').val());
    //     };
    // });



});