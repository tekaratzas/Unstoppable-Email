pragma solidity 0.4.20;


contract Email {

    address public owner;
    mapping(address => Inbox) public inboxes;

    struct Mail {
        uint256 id;
        address sender;
        address reciever; 
        bytes32 message;
    }

    struct Inbox {
        address owner;
        Mail[] email;
    }

    function Email() {
        owner = msg.sender;
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(owner);
    }
}

