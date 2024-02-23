function main(){
  var formResponces = getSheetsById(1631990413);

  var formData = formResponces.getRange(1,1, formResponces.getLastRow(), formResponces.getLastColumn()).getDisplayValues();

  var name = formResponces.getRange(formResponces.getLastRow(),2,1,formResponces.getLastColumn()).getDisplayValue();
  var email = formResponces.getRange(formResponces.getLastRow(),3,1,formResponces.getLastColumn()).getDisplayValue();


  var html_template = HtmlService.createTemplateFromFile('email');
  html_template.name = name;
  var htmlForEmail = html_template.evaluate().getContent();

  GmailApp.sendEmail(
    email,
    "Automation Nation Testing",
    "This email contains html",
    {htmlBody: htmlForEmail}
  )
}
