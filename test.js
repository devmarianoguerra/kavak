const emails = [
  "test.email+alex@kavak.com",
  "test.e.mail+bob.cathy@kavak.com",
  "testemail+david@ka.vak.com",
];

var emailsUnicos = function (emails) {
  let sended = 0;
  var string = emails.toString();
  var ordered = string.replace(/[.\+]|_/g, " ");
  for (let i = 0; i < emails.length; i++) {
    if (ordered.includes("@kavak")) {
      sended++;
      i++;
    }
  }
  return sended;
};

console.log(emailsUnicos(emails));
