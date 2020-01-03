let messages; // messages:string
messages = 'abc';
let endwithC = (<string>messages).endsWith('c');
let altEndwithC = (messages as string).endsWith('c');