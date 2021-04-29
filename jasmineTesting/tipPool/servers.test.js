describe("Servers tests", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Zach';
  });

  it('should add a new server to allServers', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toBe(1);
    expect(allServers['server' + serverId].serverName).toBe('Zach');
  });

  it('should update server table', function () {
    submitServerInfo();
    updateServerTable();

    let currentTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTdList.length).toBe(3);
    expect(currentTdList[0].innerText).toBe('Zach');
    expect(currentTdList[1].innerText).toBe('$0.00');
    expect(currentTdList[2].innerText).toBe('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
