#!/usr/bin/env node

const net = require('net');

const client = net.createConnection(process.argv[2], () => {
    console.log('SonarTS Server connected to 12345');
    console.error('this is error')

    client.on("data", data => {
      client.write(`{ "issues": [ { failure: 'Issue message',
                            startPosition: { line: 1, character: 5 },
                            endPosition: { line: 1, character: 6 },
                            name: "absolute/path/to/file.ts",
                            ruleName: 'no-unconditional-jump',
                            secondaryLocations: [],
                            ruleSeverity: 'error' } ]}`);
    });
});
