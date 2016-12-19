import { EventEmitter } from "events";
import _ from "lodash";
import conversationStore from "./ConversationStore";

import dispatcher from "../dispatcher";

class CurrentConversationStore extends EventEmitter {
  constructor() {
    super();
    this.currentConversationId = "conversation005";
    this.updateListeners = this.updateListeners.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
    this.getConversationID = this.getConversationID.bind(this);

    this.handleAction = {

      'MESSAGE__SENDING': this.updateListeners,
      'MESSAGE__SENT': this.updateListeners,
      'MESSAGE__SENT_REMOTE': this.updateListeners,
      'MESSAGE__SEEN': this.updateListeners,
      'MESSAGE__RECEIVED': this.updateListeners,
      'CONVERSATION__SELECTED': this.changeConversation,

    }
  }

  changeConversation(action){
    this.currentConversationId = action.conversationId;
    this.emit("change");
  }

  getConversation(){
    var conversation = conversationStore.getConversationById(
      this.currentConversationId
    );
    return conversation;
  }

  getConversationID(){
    return this.currentConversationId;
  }

  updateListeners(){
    this.emit("change");
  }

  handleActions(action) {
    return (this.handleAction[action.type]) ? this.handleAction[action.type](action): null;
  }

}

const currentConversationStore = new CurrentConversationStore;
dispatcher.register(currentConversationStore.handleActions.bind(currentConversationStore));

export default currentConversationStore;