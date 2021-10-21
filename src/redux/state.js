
let state = {
  dialogsPage:{
    dialogs:[
      { id: '1', name: 'Alex' },
      { id: '2', name: 'Freank' },
      { id: '3', name: 'Missa' }
    ],
    messages:[
      { id: '1', message: 'Hello 1' },
      { id: '2', message: 'Hello 2' },
      { id: '3', message: 'Hello 3' }
    ]
  },

  contentPage:{
    posts:[
      {id: '1', message: 'Hello', likesCount: '0'},
      {id: '2', message: 'Hello, my friend', likesCount: '21'}
    ] 
  }
}

export default state;