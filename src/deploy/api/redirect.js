const request = require("request");
const Arweave = require('arweave/node');
const arweave = Arweave.init();

module.exports = (req, res) => {
    console.log(req);
    const transactions = await arweave.arql({
        op: 'and',
        expr1: {
            op: 'equals',
            expr1: 'from',
            expr2: nestWalletAddress
        },
        expr2: {
            op: 'equals',
            expr1: 'App-Name',
            expr2: 'Fossil'
        }
    });
    console.log(transactions);
    res.status(201).json({ transactions });
};