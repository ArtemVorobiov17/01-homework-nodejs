const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const { Command } = require('commander');
const program = new Command();


program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const allContcts = await listContacts();
        return console.table(allContcts);
    case 'get':
      const contactById = await
        getContactById(id)
        return console.log(contactById);
    case 'add':
        const newAddContact = await addContact(name, email, phone);
        return console.log(newAddContact);
    case 'remove':
        const deliteContact = await removeContact(id);
        return console.log(deliteContact);
    default:
        console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);