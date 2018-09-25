import React from "react";

const Messages = ({ messages, update }) => {
  console.log(messages);
  const getLabel = labels =>
    labels.map(lbl => (
      <span className="label label-warning" key={lbl}>
        {lbl}
      </span>
    ));

  const getMessageClass = message => {
    let cls = "";
    if (message.read) {
      cls += " read";
    } else {
      cls += " unread";
    }
    return cls;
  };

  const getStarStatus = message => {
    let star = "";
    if (message.starred) {
      star += "fa-star";
    } else {
      star += "fa-star-o";
    }
    return star;
  };

  const getSelectStatus = message => {
    let check = "";
    if (message.selected) {
      check += "checked";
    } else {
      check += "";
    }
    return check;
  };

  const colorSelected = message => {
    let highlight = "";
    if (message.selected) {
      highlight += " selected";
    } else {
      highlight += "";
    }
    return highlight;
  };

  const changeStar = message => {
    if (message.starred) {
      message.starred = false;
    } else {
      message.starred = true;
    }
    update(messages);
  };

  const changeCheck = message => {
    if (message.selected) {
      message.selected = false;
    } else {
      message.selected = true;
    }
    update(messages);
  };

  return messages.map(message => (
    <div
      key={message.id}
      className={
        "row message " + getMessageClass(message) + colorSelected(message)
      }
    >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              onChange={changeCheck.bind(this, message)}
              checked={getSelectStatus(message)}
            />
          </div>
          <div className="col-xs-2">
            <i
              onClick={changeStar.bind(this, message)}
              className={"star fa " + getStarStatus(message)}
            />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {getLabel(message.labels)}
        <a href="">{message.subject}</a>
      </div>
    </div>
  ));
};

export default Messages;
