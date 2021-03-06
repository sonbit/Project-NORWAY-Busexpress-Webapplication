﻿// Source: #7
function displayDeleteDialog(id) {
    $("#dialog-confirm").html(
        "<p>Ønsker du å slette denne raden?</p>" +
        "<p>Husk å lagre endringene når du er ferdig</p>"
    );

    $("#dialog-confirm").dialog({
        title: "Slett rad",
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Slett rad": function () {
                $(this).dialog("close");
                deleteRow(id);
            }, 
            "Avbryt": function () {
                $(this).dialog("close");
            }
        }
    });
}

function displaySendToDBDialog(index) {
    var emptyDeleteArray = (delPrimaryKeys === undefined || delPrimaryKeys.length === 0);
    var emptyEditArray = (editStops.length === 0 && editRoutes.length === 0 && editRouteTables.length === 0 && editTickets.length === 0 && editTicketTypes.length === 0 && editCompositions.length === 0 && editUsers.length === 0);

    if (emptyDeleteArray && emptyEditArray) {
        displayDBInfo();
        return;
    }

    $("#dialog-confirm").html(
        "<p>Ønsker du å sende endringene til databasen?</p>" +
        "<p>Husk at de nye dataene vil da overskrive de gamle. Refresh siden eller logg ut for å angre endringene</p>"
    );

    $("#dialog-confirm").dialog({
        title: "Send til database",
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Ja": function () {
                $(this).dialog("close");
                sendData(index);
            },
            "Avbryt": function () {
                $(this).dialog("close");
            }
        }
    });
}

function displayLogOutDialog() {
    $("#dialog-confirm").html(
        "<p>Ønsker du å logge ut?</p>" +
        "<p>Data som ikke er lagret til databasen blir forkastet</p>"
    );

    $("#dialog-confirm").dialog({
        title: "Logg ut",
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Ja": function () {
                $(this).dialog("close");
                logOut();
            },
            "Avbryt": function () {
                $(this).dialog("close");
            }
        }
    });
}