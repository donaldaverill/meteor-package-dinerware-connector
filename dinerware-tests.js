if (Meteor.isServer) {
  Tinytest.add('Dinerware - defined on server', function(test) {
    test.notEqual(Dinerware, undefined, 'Expected ' +
      'Dinerware to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Dinerware - undefined on client', function(test) {
    Dinerware = Dinerware || undefined;
    test.isUndefined(Dinerware, 'Expected Dinerware ' +
      'to be undefined on the client.');
  });
}
