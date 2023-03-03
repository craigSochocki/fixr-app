"use strict";

$(document).ready(function () {
  //Design 1 (plan-1 script)
  var TotalBasic = 0;

  $(".checkbox_basic_1").parent().find("span.one_price").addClass("txt-light");
  $("input:checkbox[name=checkbox_basic_1]:checked").each(function () {
    TotalBasic = TotalBasic + parseInt($(this).val());
    $(this).parent().find("span.one_price").removeClass("txt-light");
  });
  $("#basic_price").html(TotalBasic);

  $(".checkbox_basic_1").on("click", function () {
    var currentvalue = $(this).val();

    if (!$(this).is(":checked")) {
      $(this).parent().find("span.one_price").addClass("txt-light");
      TotalBasic = TotalBasic - parseInt(currentvalue);
    } else {
      $(this).parent().find("span.one_price").removeClass("txt-light");
      TotalBasic = TotalBasic + parseInt(currentvalue);
    }

    $("#basic_price").html(TotalBasic);

    if (TotalBasic > 0) {
      $("#basicSignup_1").removeClass("btn-disable");
      $("#basicSignup_1").unbind("click");
    } else {
      $("#basicSignup_1").addClass("btn-disable");
      $("#basicSignup_1").bind("click", false);
    }
  });

  //Design 1 (plan-2 script)
  var TotalStanderd = 0;

  $(".checkbox_standerd_1")
    .parent()
    .find("span.one_price")
    .addClass("txt-light");
  $("input:checkbox[name=checkbox_standerd_1]:checked").each(function () {
    TotalStanderd = TotalStanderd + parseInt($(this).val());
    $(this).parent().find("span.one_price").removeClass("txt-light");
  });
  $("#standard_price").html(TotalStanderd);

  $(".checkbox_standerd_1").on("click", function () {
    var currentvalue = $(this).val();

    if (!$(this).is(":checked")) {
      $(this).parent().find("span.one_price").addClass("txt-light");
      TotalStanderd = TotalStanderd - parseInt(currentvalue);
    } else {
      $(this).parent().find("span.one_price").removeClass("txt-light");
      TotalStanderd = TotalStanderd + parseInt(currentvalue);
    }

    $("#standard_price").html(TotalStanderd);

    if (TotalStanderd > 0) {
      $("#standardSignup_1").removeClass("btn-disable");
      $("#standardSignup_1").unbind("click");
    } else {
      $("#standardSignup_1").addClass("btn-disable");
      $("#standardSignup_1").bind("click", false);
    }
  });

  //Design 1 (plan-3 script)
  var TotalPremium = 0;

  $(".checkbox_premium_1")
    .parent()
    .find("span.one_price")
    .addClass("txt-light");
  $("input:checkbox[name=checkbox_premium_1]:checked").each(function () {
    TotalPremium = TotalPremium + parseInt($(this).val());
    $(this).parent().find("span.one_price").removeClass("txt-light");
  });
  $("#premium_price").html(TotalPremium);

  $(".checkbox_premium_1").on("click", function () {
    var currentvalue = $(this).val();

    if (!$(this).is(":checked")) {
      $(this).parent().find("span.one_price").addClass("txt-light");
      TotalPremium = TotalPremium - parseInt(currentvalue);
    } else {
      $(this).parent().find("span.one_price").removeClass("txt-light");
      TotalPremium = TotalPremium + parseInt(currentvalue);
    }

    $("#premium_price").html(TotalPremium);

    if (TotalPremium > 0) {
      $("#premiumSignup_1").removeClass("btn-disable");
      $("#premiumSignup_1").unbind("click");
    } else {
      $("#premiumSignup_1").addClass("btn-disable");
      $("#premiumSignup_1").bind("click", false);
    }
  });
});
