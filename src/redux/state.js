const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
  _callSubscriber() {
    console.log('State change');
  },
  _state: {
    dialogsPage: {
      dialogs: [
        { id: '1', name: 'Alex' },
        { id: '2', name: 'Freank' },
        { id: '3', name: 'Missa' }
      ],
      messages: [
        { id: '1', message: 'Hello 1' },
        { id: '2', message: 'Hello 2' },
        { id: '3', message: 'Hello 3' }
      ],
      newMessage: ''
    },

    contentPage: {
      posts: [
        { id: '1', message: 'Hello', likesCount: '0' },
        { id: '2', message: 'Hello, my friend', likesCount: '21' }
      ],
      newPosts: 'text'
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.contentPage.newPosts,
      likesCount: 0
    }
    this._state.contentPage.posts.push(newPost);
    this._state.contentPage.newPosts = '';
    this._callSubscriber(this._state);
  },

  _updateNewPost (newPostMessage) {
    this._state.contentPage.newPosts = newPostMessage;
    this._callSubscriber(this._state);
  },

  _sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessage
    }
    this._state.dialogsPage.newMessage = '';
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  },

  _updateNewMessage(newMessage) {
    this._state.dialogsPage.newMessage = newMessage;
    this._callSubscriber(this._state);
  },

  dispatch(action){
    if(action.type === ADD_POST){
     this._addPost();
    } 
    else if(action.type === UPDATE_NEW_POST) {
      this._updateNewPost(action.newPostMessage);
    }
    else if(action.type === UPDATE_NEW_MESSAGE) {
      this._updateNewMessage(action.newMessage);
    }
    else if(action.type === SEND_MESSAGE){
      this._sendMessage();
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (post) => ({type: UPDATE_NEW_POST, newPostMessage: post})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage})

export default store;
window.store = store;