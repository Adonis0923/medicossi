$(document).ready(function () {
  const videoYoutube = 'https://www.youtube.com/embed/cSseVigqcv8';

  $('#vervideo').on('show.bs.modal', () => {
    $('.ytplayer').attr('src', videoYoutube);
  });
  
  $('#vervideo').on('hide.bs.modal', () => {
    $('.ytplayer').attr('src', '');
  });

})



$(document).ready(function () {
  $("#typeSearch").change(function(){
    $(".inputPlace").attr("placeholder", $(this).find(":selected").data("rate"));
})
})



$("body").on("click", ".planes-login", function () {
  // $(".modal").modal("hide");
  // trial = "/plan/trial?plan=8";
  // $("#solicitud_planes").val(trial);
  // $(".google-btn").attr("href", "/redirect/google?plan=true");
  // $("#modal-login").modal("show");
});

$("body").on("click", ".changeicon", function () {
  $("i", ".changeicon").addClass("fa-caret-up").removeClass("fa-caret-down");
  $("i", this).addClass("fa-caret-down").removeClass("fa-caret-up");
  $(".changeicon").attr("disabled", true);
  $(".changeicon").not(this).attr("disabled", false);
});
{
  /* <i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i> */
}
$(document).ready(function () {
  $(".clickDetalles1").click(function () {
    $("#detallesGratis").slideToggle(200);
    $("#detallesAgenda").slideUp(200);
    $("#detallesProfesional").slideUp(200);
    $("#detallesPlatino").slideUp(200);
  });
  $(".clickDetalles2").click(function () {
    $("#detallesGratis").slideUp(200);
    $("#detallesAgenda").slideToggle(200);
    $("#detallesProfesional").slideUp(200);
    $("#detallesPlatino").slideUp(200);
  });
  $(".clickDetalles3").click(function () {
    $("#detallesGratis").slideUp(200);
    $("#detallesAgenda").slideUp(200);
    $("#detallesProfesional").slideToggle(200);
    $("#detallesPlatino").slideUp(200);
  });
  $(".clickDetalles4").click(function () {
    $("#detallesGratis").slideUp(200);
    $("#detallesAgenda").slideUp(200);
    $("#detallesProfesional").slideUp(200);
    $("#detallesPlatino").slideToggle(200);
  });
  

  $('#vervideo').on('hide.bs.modal', () => {
    $('#ytplayer').attr('src', '');
  });
});
//Dashboard
//tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    position: {
      my: "left+15 top-50",
      at: "center top",
    },
  });
  $(".clickMostrar1").click(function (e) {
    $(".show1").toggle("");
    $(".show2").fadeOut("");
    e.stopPropagation();
  });
  $(".clickMostrar2").click(function () {
    $(".show2").toggle("");
    $(".show1").fadeOut("");
  });

  $(function () {
    $("#js-heightControl").css("height", $(window).height() - $("html").height() + "px");
  });
});
$(document).ready(function () {
  $("#show").click(function () {
    // $("#dashboard").fadeToggle(200);
  });
  ////me
  /////
  $(".filter").click(function () {
    $("#panel").slideToggle(200);
  });
  //------Fechas------//
  $(".datepicker").datepicker({
    language: "es",
    dateFormat: "dd-mm-yy",
    endDate: new Date(),
  });
  $(".datepicker2").datepicker({
    language: "es",
    dateFormat: "dd-mm-yy",
    startDate: new Date(),
  });
  $(".datepicker3").datepicker({
    language: "es",
    dateFormat: "dd-mm-yy",
  });
  $(".date-range1").datepicker({
    language: "es",
    dateFormat: "dd-mm-yy",
    endDate: new Date(),
  });
  $(".date-range2").datepicker({
    language: "es",
    dateFormat: "dd-mm-yy",
    endDate: new Date(),
  });
  $("body").on("change", ".date-range1", function () {
    r = $(".date-range1").val();
    $(".date-range2").datepicker("destroy");
    $(".date-range2").val("");
    $(".date-range2").datepicker({
      language: "es",
      dateFormat: "dd-mm-yy",
      startDate: r,
      endDate: new Date(),
    });
  });
  $("input[type=text].datepicker2").keyup(function (e) {
    var textSoFar = $(this).val();
    if (e.keyCode != 191) {
      if (e.keyCode != 8) {
        if (textSoFar.length == 2 || textSoFar.length == 5) {
          $(this).val(textSoFar + "/");
        }
        //to handle copy & paste of 8 digit
        else if (e.keyCode == 86 && textSoFar.length == 8) {
          $(this).val(textSoFar.substr(0, 2) + "/" + textSoFar.substr(2, 2) + "/" + textSoFar.substr(4, 4));
        }
      } else {
        //backspace would skip the slashes and just remove the numbers
        if (textSoFar.length == 5) {
          $(this).val(textSoFar.substring(0, 4));
        } else if (textSoFar.length == 2) {
          $(this).val(textSoFar.substring(0, 1));
        }
      }
    } else {
      //remove slashes to avoid 12//01/2014
      $(this).val(textSoFar.substring(0, textSoFar.length - 1));
    }
  });
  //------Fin Fechas------//
});
$(document).on("click", ".browse", function () {
  var file = $(this).parent().parent().parent().find(".file");
  file.trigger("click");
});
$(document).on("change", ".file", function () {
  $(this)
    .parent()
    .find(".form-control")
    .val(
      $(this)
        .val()
        .replace(/C:\\fakepath\\/i, "")
    );
});
// Star raiting
$(function () {
  $(".li-config").on("click", function () {
    var selectedCssClass = "selected";
    var $this = $(this);
    $this.siblings("." + selectedCssClass).removeClass(selectedCssClass);
    $this.addClass(selectedCssClass).parent().addClass("vote-cast");
  });
});
// Flip card
$(document).ready(function () {
  $(".flipButton").bind("click", function () {
    $(this).next().toggleClass("hover");
  });
});
// //shedule
// $(function() {
//     $("#scheduler").kendoScheduler({
//         date: new Date("2018/3/13"),
//         startTime: new Date("2018/3/13 07:00 AM"),
//         height: 600,
//         views: [
//         "day",
//         { type: "workWeek", selected: true },
//         "week",
//         { type: "timeline", eventHeight: 50}
//         ],
//         timezone: "Etc/UTC",
//         dataSource: {
//             batch: true,
//             transport: {
//                 read: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks",
//                     dataType: "jsonp"
//                 },
//                 update: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
//                     dataType: "jsonp"
//                 },
//                 create: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
//                     dataType: "jsonp"
//                 },
//                 destroy: {
//                     url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
//                     dataType: "jsonp"
//                 },
//                 parameterMap: function(options, operation) {
//                     if (operation !== "read" && options.models) {
//                         return {models: kendo.stringify(options.models)};
//                     }
//                 }
//             },
//             schema: {
//                 model: {
//                     id: "taskId",
//                     fields: {
//                         taskId: { from: "TaskID", type: "number" },
//                         title: { from: "Title", defaultValue: "No title", validation: { required: true } },
//                         start: { type: "date", from: "Start" },
//                         end: { type: "date", from: "End" },
//                         startTimezone: { from: "StartTimezone" },
//                         endTimezone: { from: "EndTimezone" },
//                         description: { from: "Description" },
//                         recurrenceId: { from: "RecurrenceID" },
//                         recurrenceRule: { from: "RecurrenceRule" },
//                         recurrenceException: { from: "RecurrenceException" },
//                         ownerId: { from: "OwnerID", defaultValue: 1 },
//                         isAllDay: { type: "boolean", from: "IsAllDay" }
//                     }
//                 }
//             },
//             filter: {
//                 logic: "or",
//                 filters: [
//                 { field: "ownerId", operator: "eq", value: 1 },
//                 { field: "ownerId", operator: "eq", value: 2 }
//                 ]
//             }
//         },
//         resources: [
//         {
//             field: "ownerId",
//             title: "Owner",
//             dataSource: [
//             { text: "Alex", value: 1, color: "#f8a398" },
//             { text: "Bob", value: 2, color: "#51a0ed" },
//             { text: "Charlie", value: 3, color: "#56ca85" }
//             ]
//         }
//         ]
//     });
//     $("#people :checkbox").change(function(e) {
//         var checked = $.map($("#people :checked"), function(checkbox) {
//             return parseInt($(checkbox).val());
//         });
//         var scheduler = $("#scheduler").data("kendoScheduler");
//         scheduler.dataSource.filter({
//             operator: function(task) {
//                 return $.inArray(task.ownerId, checked) >= 0;
//             }
//         });
//     });
// });
/* Checkbox panel professional */
$(".checkbox-wrapper").on("click", function () {
  $(this).toggleClass("checked");
  if ($(this).hasClass("checked")) {
    $('input[type="checkbox"]', this).prop("checked", true);
  } else {
    $('input[type="checkbox"]', this).prop("checked", false);
  }
});
/* textarea panel profesional general */
/* Add query */
$(document).ready(function () {
  $("#show-textarea").click(function () {
    $("#textarea-edit").slideDown("fast");
  });
  $("#show-textarea1").click(function () {
    $("#textarea-edit").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#show-question3").click(function () {
    $("#show-question").slideDown("fast");
  });
  $("#show-question2").click(function () {
    $("#show-question").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#show-question7").click(function () {
    $("#test-laboratory").slideDown("fast");
  });
  $("#show-question6").click(function () {
    $("#test-laboratory").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#show-question9").click(function () {
    $("#diagnosis").slideDown("fast");
  });
  $("#show-question8").click(function () {
    $("#diagnosis").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#show-question2").click(function () {
    $("#panel-insurance").slideDown("fast");
  });
  $("#show-question1").click(function () {
    $("#panel-insurance").slideUp("fast");
  });
});
/* note emergencies */
$(document).ready(function () {
  $("#open2").click(function () {
    $("#open01").slideDown("fast");
  });
  $("#open1").click(function () {
    $("#open01").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#open4").click(function () {
    $("#open02").slideDown("fast");
  });
  $("#open3").click(function () {
    $("#open02").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#open6").click(function () {
    $("#open03").slideDown("fast");
  });
  $("#open5").click(function () {
    $("#open03").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#open8").click(function () {
    $("#open04").slideDown("fast");
  });
  $("#open7").click(function () {
    $("#open04").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#open10").click(function () {
    $("#open05").slideDown("fast");
  });
  $("#open9").click(function () {
    $("#open05").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#open12").click(function () {
    $("#open06").slideDown("fast");
  });
  $("#open11").click(function () {
    $("#open06").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#switch-on").click(function () {
    $("#open-check").slideDown("fast");
  });
  $("#switch-off").click(function () {
    $("#open-check").slideUp("fast");
  });
});
$(document).ready(function () {
  $("#switch-on1").click(function () {
    $("#open-check1").slideDown("fast");
  });
  $("#switch-off1").click(function () {
    $("#open-check1").slideUp("fast");
  });
});

//input validate
$('input[type="tel"]').attr("pattern", "^[0-9]*").attr("maxlength", 10);
$(".latinText").attr("pattern", "[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*");

$(document).ready(function () {
  // $(".navFix").autoHidingNavbar({});

  $("#center1").click(function () {
    $("#colorModal").addClass("bg-center").removeClass("bg-medico").removeClass("bg-paciente");
    $("#login").addClass("btn-center").removeClass("btn-medico").removeClass("btn-paciente").removeClass("btn-azul");
    openModal();
  });

  $("#medico1").click(function () {
    $("#colorModal").addClass("bg-medico").removeClass("bg-center").removeClass("bg-paciente");
    $("#login").addClass("btn-medico").removeClass("btn-center").removeClass("btn-paciente").removeClass("btn-azul");
    openModal();
  });

  $("#paciente1").click(function () {
    $("#colorModal").addClass("bg-paciente").removeClass("bg-center").removeClass("bg-medico");
    $("#login").addClass("btn-paciente").removeClass("btn-medico").removeClass("btn-center").removeClass("btn-azul");
    openModal();
  });

  $("#call_modal_login , .loginModal").click(function () {
    $("#colorModal").removeClass("bg-paciente").removeClass("bg-center").removeClass("bg-medico");
    $("#login").addClass("btn-azul").removeClass("btn-medico").removeClass("btn-center").removeClass("btn-paciente");
    openModal();
  });

  function openModal() {
    $("#modal_verify_patient").modal("hide");
    $("#modal-login").modal("show");
  }

  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });

  /* === Counter === */
  $(".revelar").on("inview", function (event, visible, visiblePartX, visiblePartY) {
    if (visible) {
      $(this)
        .find(".timer")
        .each(function () {
          var $this = $(this);
          $({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      $(this).off("inview");
    }
  });
});

$(document).ready(function () {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('a[href*="#list-agenda"]')
    .not('a[href*="#list-asistente"]')
    .not('a[href*="#list-citas"]')
    .not('a[href*="#list-ingresos"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});

$("body").on("click", "#call_modal_login", function () {
  $("#solicitud_cita").val("");
  $("#solicitud_planes").val("");
  $("#agregar_lista").val("");
  $("#modal-login").modal("show");
  $("#modal_verify_patient").modal("hide");
});

function login() {
  route = "/login2";
  email = $("#emailLogin").val();
  password = $("#passwordLogin").val();
  cita = $("#solicitud_cita").val();
  planes = $("#solicitud_planes").val();
  lista = $("#agregar_lista").val();
  $.ajax({
    headers: {
      "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
    type: "post",
    url: route,
    data: {
      email: email,
      password: password,
      cita: cita,
      planes: planes,
      lista: lista,
    },
    success: function (result) {
      if (result == "true") {
        //location.reload();
        window.location.href = "/loginRedirect";
      } else if (result == "cita") {
        window.location.href = cita;
      } else if (result.type == "medico_id") {
        window.location.href = result.medico_id;
      } else if (result == "planes") {
        window.location.href = planes;
      } else {
        $("#text-alert").html("Email o Contraseña Invalida");
        $("#alert").fadeOut();
        $("#alert").fadeIn();
      }
    },
    error: function (result) {
      errores = "";
      $.each(result.responseJSON.errors, function (index, value) {
        errores += "<li>" + value + "</li>";
      });
      $("#text-alert").html("<ul>" + errores + "</ul>");
      $("#alert").fadeIn();
      // $error += '<li>result.message</li>';
      //  console.log(result.message);
    },
  });
}
