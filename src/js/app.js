var arcgisUtils = (function() {
  var _arcgisUtils = {};

  _arcgisUtils.token = '';

  _arcgisUtils.getToken = function(serverName, serverPort, username, password) {
    var url = 'http://'+serverName+':'+serverPort + '/arcgis/admin/generateToken';
    $.ajax({
      async: false,
      url: url,
      type: 'POST',
      dataType : 'json',
      data: {
        username: username,
        password: password,
        client: 'requestip',
        f: 'json'
      },
      xhr: function() {
        console.log('toto');
      },
      complete: function(xhr,status) {
        console.log(status);
        _arcgisUtils.token = xhr.token;
      },
      success: function (data, status, xhr) {

        _arcgisUtils.token = data;
      },
      error: function(xhr, status, error) {
        console.log(status);
      },
      dataFilter: function(data,type) {
        console.log('titi');
      }

    });

    // $.post('http://millas:6080/arcgis/admin/generateToken', {
    //     username: 'siteadmin',
    //     password: 'arcgis',
    //     client: 'requestip',
    //     f: 'json'
    //   }, function(data, status) {
    //     console.log(status);
    //   });

    // $.getJSON('http://millas:6080/arcgis/admin/generateToken', {
    //   username: 'siteadmin',
    //   password: 'arcgis',
    //   client: 'requestip',
    //   f: 'json'
    // }, function(data, status, xhr) {
    //   console.log(status);
    // });

    return _arcgisUtils.token;
  };

  return _arcgisUtils;

})();

console.log(arcgisUtils.getToken('millas', '6080', 'siteadmin', 'arcgis'));
