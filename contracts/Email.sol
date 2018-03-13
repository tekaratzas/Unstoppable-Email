pragma solidity 0.4.21;


contract Email {

    address public owner;
    mapping(address => Inbox) public inboxes;

    struct Mail {
        uint256 id;
        address sender;
        address reciever; 
        bytes32 message;
        bytes32 subject;
    }

    struct Inbox {
        address owner;
        Mail[] mail;
    }

    function Email() public {
        owner = msg.sender;
    }

    function sendMail(address reciever, bytes32 message, bytes32 subject) public {
        Mail memory mail;
        mail.sender = msg.sender;
        mail.reciever = reciever;
        mail.message = message;
        mail.subject = subject;

        inboxes[reciever].mail.push(mail);
    }

    function loadInbox(address user) public returns (bytes32[] messages, bytes32[] subjects, address[] senders) {
        Mail[] memory mail = inboxes[user].mail;
        uint len = mail.length;

        for (uint i = 0; i < len; i++) {
            messages[i] = mail[i].message;
            subjects[i] = mail[i].subject;
            senders[i] = mail[i].sender;
        }
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(owner);
    }
}

