$(function () {
  function buildHTML(message) {
    if (message.image) {
      var html = `<div class="message">
                    <div class="message__upper-info">
                      <p class="message__upper-info__talker">
                        ${message.user_name}
                      </p>
                      <p class="message__upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message__lower">
                      <p class="message__lower__content">
                        ${message.content}
                      </p>
                      <img class="message__lower__image" src=${message.image} >
                    </div>
                  </div>`;
      return html;
    } else {
      var html = `<div class="message">
                    <div class="message__upper-info">
                      <p class="message__upper-info__talker">
                        ${message.user_name}
                      </p>
                      <p class="message__upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message__lower">
                      <p class="message__lower__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`;
      return html;
    }
  }
  $("#new_message").on("submit", function (e) {
    e.preventDefault();
    var formdata = new FormData(this);
    var uri = $(this).attr("action");
    $.ajax({
      uri: uri,
      type: "POST",
      data: formdata,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data) {
        var html = buildHTML(data);
        $(".messages").append(html);
        $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight });
        $("#new_message")[0].reset();
        $(".submit-btn").prop("disabled", false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
        $(".submit-btn").prop("disabled", false);
      });
  });
});
