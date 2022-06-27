"use strict";

var _tsyringe = require("tsyringe");

var _mail = _interopRequireDefault(require("../../configuration/mail"));

var _EtherealMailProvider = _interopRequireDefault(require("./implementations/EtherealMailProvider"));

var _SESMailProvider = _interopRequireDefault(require("./implementations/SESMailProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const provider = {
  ethereal: _tsyringe.container.resolve(_EtherealMailProvider.default),
  ses: _tsyringe.container.resolve(_SESMailProvider.default)
};

_tsyringe.container.registerInstance('MailProvider', provider[_mail.default.driver]);