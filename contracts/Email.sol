pragma solidity 0.4.21;

pragma experimental ABIEncoderV2;


contract Email {

    address public owner;
    mapping(address => Account) public accounts;

    struct Mail {
        uint256 id;
        address sender;
        address reciever; 
        string message;
        string subject;
        bool read;
    }
    
    struct Account {
        Inbox inbox;
        string emailAddress;
    }

    struct Inbox {
        address owner;
        Mail[] mail;
    }

    function Email() public {
        owner = msg.sender;
    }

    function addAccount(string emailAddress) public {
        var acct = accounts[msg.sender];
        acct.emailAddress = emailAddress;
    }
    
    function sendMail(address recieverAddress, string subject, string message) public {
        Mail memory mail; 
        mail.sender = msg.sender;
        mail.reciever = recieverAddress;
        mail.subject = subject;
        mail.message = message;
        
        accounts[recieverAddress].inbox.mail.push(mail);
    }
    
    function getUnreadEmail() public returns (uint){
        Account memory acct = accounts[msg.sender];
        return acct.inbox.mail.length;
    }
    
    function getLastEmail() public returns (address sender, string subject, string message) {
        Account memory acct = accounts[msg.sender];
        uint len = acct.inbox.mail.length;
        if(len > 0){
            Mail memory m = acct.inbox.mail[len - 1];
            return (m.sender, m.subject, m.message);
        } else {
            return;
        }
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(owner);
    }
}

