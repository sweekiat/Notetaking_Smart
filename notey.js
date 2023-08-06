export const noteyABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "noteId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "addNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "noteId",
        type: "uint256",
      },
    ],
    name: "deleteNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "noteId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "NoteAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "noteId",
        type: "uint256",
      },
    ],
    name: "NoteDeleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "noteId",
        type: "uint256",
      },
    ],
    name: "getNote",
    outputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNoteIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNotes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
        ],
        internalType: "struct NoteStorage.Note[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];