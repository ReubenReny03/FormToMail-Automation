function getSheetsById(sheet_id) {
  var wb = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = wb.getSheets()
  Logger.log(sheets)
  for(i in sheets){
    if(sheets[i].getSheetId() == sheet_id){
      var sheetName = sheets[i].getSheetName();
    }
  }

  return wb.getSheetByName(sheetName);
}
