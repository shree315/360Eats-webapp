function doGet(request) {
  return HtmlService.createHtmlOutputFromFile('Index');
}

// method that adds record to variables to sheet
function AddRecord(location, adults, children, repeat, ethnicity) {
  var url = "https://docs.google.com/spreadsheets/d/1jN_RzGhw5vjV2_uguykFhX5jKPSaGGKruVqN_SfdfiQ/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  ws.appendRow([new Date(), location, adults, children, repeat, ethnicity]);
}
