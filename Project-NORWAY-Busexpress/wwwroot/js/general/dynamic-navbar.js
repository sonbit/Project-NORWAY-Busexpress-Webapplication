﻿$(function () {
    resizeNavBarListener();
});

function showDropDownNav() {
    $("#dropdown-nav-button").html(
        '<div id="dropdown-nav-button-action" onclick="hideDropDownNav()">' +
        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />' +
        '<path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />' +
        '</svg>' +
        '</div');

    $("#dropdown-nav-menu-options").removeAttr("hidden");
}

function hideDropDownNav() {
    $("#dropdown-nav-button").html(
        '<div id="dropdown-nav-button-action" onclick="showDropDownNav()">' +
        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />' +
        '</svg>' +
        '</div>');

    document.getElementById("dropdown-nav-menu-options").setAttribute("hidden", true);
}

function resizeNavBarListener() {
    resizeNavBar();
    $(window).on("load resize", function () {
        resizeNavBar();
    });
}

function resizeNavBar() {
    if ($(window).width() < (992 - getScrollbarWidth())) {
        $("#dropdown-nav-button").removeAttr("hidden");
        document.getElementById("nav-bar-menu-options").setAttribute("hidden", true);
    } else {
        document.getElementById("dropdown-nav-button").setAttribute("hidden", true)
        hideDropDownNav();
        $("#nav-bar-menu-options").removeAttr("hidden");
    }
}