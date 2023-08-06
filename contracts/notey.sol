// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract NoteStorage {
    address owner;
    struct Note {
        uint256 id;
        string content;
        string title;

    }
    mapping(address => Note[]) private notes;
    mapping(address=> uint256[]) private noteIds;

    event NoteAdded(address indexed owner, uint256 noteId, string content);

    event NoteDeleted(address indexed owner, uint256 noteId);

    function checkNoteIdExists(uint256 noteId) private view returns (bool) {
        uint256[] storage userNoteIds = noteIds[msg.sender];
        for (uint256 i = 0; i < userNoteIds.length; i++) {
            if (userNoteIds[i] == noteId) {
                return true;
            }
        }
        return false;
    }

    function addNote(uint256 noteId, string memory content, string memory title) external {
        // require(notes[msg.sender].id == 0, "Note already exists for this address");
        require(checkNoteIdExists(noteId) == false ,"Note already exists for this address");
        require(noteId > 0, "Note ID should be greater than 0");

        // Create the note and store it in the mapping
        noteIds[msg.sender].push(noteId);

        Note memory newNote = Note(noteId, content,title);
        notes[msg.sender].push(newNote);
        

        // Emit the NoteAdded event
        emit NoteAdded(msg.sender, noteId, content);
    }
    function deleteNote(uint256 noteId) external {
        require(checkNoteIdExists(noteId), "Note does not exist for this address");
        for (uint256 i = 0; i < noteIds[msg.sender].length; i++) {
            Note memory tempnote = notes[msg.sender][i];
            uint256 tempid = noteIds[msg.sender][i];
            if (tempnote.id == noteId) {
                delete notes[msg.sender][i];
                
            }
            if (tempid == noteId) {
                delete noteIds[msg.sender][i];
            }
    }
    emit NoteDeleted(msg.sender, noteId);}

    // Function to retrieve the note details for the sender's address
    function getNote(uint256 noteId) external view returns ( string memory content,string memory title) {
        require(checkNoteIdExists(noteId), "Note does not exist for this address");
        
        for (uint256 i = 0; i < noteIds[msg.sender].length; i++) {
            Note memory tempnote = notes[msg.sender][i];
            if (tempnote.id == noteId) {
                return (tempnote.content,tempnote.title);
            }
        
    }}
    function getNoteIds() external view returns (uint256[] memory) {
        return noteIds[msg.sender];
    }
    function getNotes() external view returns (Note[] memory){
        return notes[msg.sender];
    }
}

