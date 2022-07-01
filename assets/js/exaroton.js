const fs = require('fs');
const request = require('request');
const {Client} = require('exaroton');
let token = document.querySelector("#token").value;
const client = new Client(token);

function init() {
    document.getElementById('button').addEventListener('click', getData);
}


async function getData() {
    let account = await client.getAccount();

    document.getElementById('account_name').innerHTML = account.name;
}
