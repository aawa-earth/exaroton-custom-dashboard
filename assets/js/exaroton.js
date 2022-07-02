const fs = require('fs');
const request = require('request');
const {Client} = require('exaroton');


function init() {
    document.getElementById('button').addEventListener('click', getData);
    let token = document.querySelector("#token").value;
    const client = new Client(token);
}


async function getData() {
    let account = await client.getAccount();

    document.getElementById('account_name').innerHTML = account.name;
    document.getElementById('coins').innerHTML = account.credits;

}

async function getServers() {

    let servers = await client.getServers();

    for (let server of servers) {

        document.getElementById('server_list').innerHTML = "<b>Name:</b> " + server.name + "<br>";

    }
}
