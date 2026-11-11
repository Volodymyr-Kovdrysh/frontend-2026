const idDB = "ВСТАВТЕ_ID_НАВЧАЛЬНОЇ_ТАБЛИЦІ";
const ss = SpreadsheetApp.openById(idDB);
const sheet_feedbacks = ss.getSheetByName("feedbacks");

function GET() {
  return getDataFromSpreadsheet();
}

function doGet(request) {
  const { method } = request.parameter;

  if (method === "GET") {
    const JSONString = JSON.stringify(GET());
    const JSONOutput = ContentService.createTextOutput(JSONString);
    JSONOutput.setMimeType(ContentService.MimeType.JSON);
    return JSONOutput;
  }

  const JSONString = JSON.stringify({ msg: "Something bad!" });
  const JSONOutput = ContentService.createTextOutput(JSONString);
  JSONOutput.setMimeType(ContentService.MimeType.JSON);
  return JSONOutput;
}
