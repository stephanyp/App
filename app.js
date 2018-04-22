var gameListItem = function(id, Name, Pictures,Attachments, rate, Buy) {
  return `<div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${Pictures}">
      <div class="card-body">
        <h2>${Name}</h2>
        <p class="card-text">${Pictures}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="app.html?id=${Cost}" class="btn btn-sm btn-outline-secondary">Price</a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Favorite</button>
          </div>
          <small class="text-muted">${rate}</small>
        </div>
      </div>
    </div>
  </div>`;
}
  $.getJSON( "https://api.airtable.com/v0/appp3qUdwqW3M4BCV/Games?api_key=keybojDUtvSsJ4IGr", function( data ) {
    // console.log(data.records);
    var items = [];
    items.push(`<div class="row">`);
    $.each( data.records, function( index, val ) {
      console.log(val.fields)
      var id = val.id;
      var name = val.fields["Name"];
      var Pictures = val.fields["Pictures"] ? val.fields["Pictures"][0].url : '';
      var Attachments = val.fields["Attachments"];
      var Cost = val.fields["Cost"];
      var rate = val.fields["rate"];
      var Buy = val.fields["Buy"];
      var itemHTML = gameListItem(id, Name, Pictures,Attachments, rate, Buy);
      items.push(itemHTML);
    });
    items.push(`</div>`);

    $(".game-list" ).append(items.join(""));
  });
