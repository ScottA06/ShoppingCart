$(document).ready(function () {
    finalCartValue();

    $(document).on('click', '.btn.remove', function (event) {
        $(this).closest('tr').remove();
        finalCartValue();
    });

    var timeout;
    $(document).on('input', 'tr input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            finalCartValue();
        }, 1000);
    });

    $('#addItem').on('submit', function (event) {
        event.preventDefault();
        var item = $(this).children('[name=name]').val();
        var cost = $(this).children('[name=amount]').val();
        var price = $(this).children('[name=price]').val();

        $('tbody').append('<tr>' +
            '<td class="name cart">' + item + '</td>' +
            '<td class="amount cart"><input type="number" value="" min="0"' + cost + '" /></td>' +
            '<td class="price cart"><input type="number" value="' + price + '" /></td>' +
            '<td class="marketValue cart"></td>' +
            '<td><button class="btn remove cart">remove</button></td>' +
            '</tr>');

        finalCartValue();
        $(this).children('[name=name]').val('');
        $(this).children('[name=amount]').val('');
        $(this).children('[name=price]').val('');
    });
});


var itemValue = function (ele) {
    var itemAmount = parseFloat($(ele).find('.amount input').val());
    var itemPrice = parseFloat($(ele).find('.price input').val());

    var value = itemAmount * itemPrice;
    $(ele).children('.marketValue').html(value);

    return value;
}

var sum = function (acc, x) { return acc + x; };

var finalCartValue = function () {
    var finalValue = [];

    $('tbody tr').each(function (i, ele) {
        var value = itemValue(ele);
        finalValue.push(value);
    });

    var cartValue = finalValue.reduce(sum);
    $('#totalCostOfAllItems').html(cartValue);
}

