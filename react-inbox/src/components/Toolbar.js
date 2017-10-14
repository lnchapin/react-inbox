import React from 'react'

const Toolbar = ({messages, update}) => {

  const checkSymbol = messages => {
    let symbol = ''
    if (messages.every(m => m.selected)) {
      symbol = 'fa-check-square-o'
    } else if (messages.some(m => m.selected)) {
      symbol = 'fa-minus-square-o'
    } else {
      symbol = 'fa-square-o'
    }
    return symbol
  }

  const checkChange = messages => {
  if (messages.every(m => m.selected)){
    messages.filter(m => m.selected = false);
  } else {
    messages.every(m => m.selected = true);
  }
  update(messages)
  }

  const markRead = messages => {
    messages.map(m => m.selected ? m.read = true : null)
    update(messages)
  }

  const markUnread = messages => {
    messages.map(m => m.selected ? m.read = false : null)
    update(messages)
  }

  const numUnread = messages => {
    let num = 0
    messages.map(m => m.read ? 0 : num++)
    return(num)
  }

  const addLabel = (e) => {
    messages.forEach(m => {
      if (m.selected && !m.labels.includes(e.target.value)) {
        m.labels.push(e.target.value)
      }
    })
    update(messages)
    e.target.children[0].selected = true
  }

  const removeLabel = (e) => {
    messages.forEach(m => {
      if (m.selected && m.labels.includes(e.target.value)) {
        let index = parseInt(e.target.value, 10)
        m.labels.splice(index, 1)
      }
    })
    update(messages)
    e.target.children[0].selected = true
  }

  const deleteMessage = (messages) => {
    console.log("here");
    let deleted = messages.filter(m => !m.selected)
    console.log(deleted);
    update(deleted)
  }

  return <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">{numUnread(messages)}</span>
      unread messages
    </p>

    <a className="btn btn-danger">
      <i className="fa fa-plus"></i>
    </a>

    <button className="btn btn-default" onClick={checkChange.bind(this, messages)}>
      <i className={"fa " + checkSymbol(messages)}></i>
    </button>

    <button className="btn btn-default" onClick={markRead.bind(this, messages)}>Mark As Read</button>

    <button className="btn btn-default" onClick={markUnread.bind(this, messages)}>Mark As Unread</button>

    <select className="form-control label-select" onChange={e => addLabel(e)}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onChange={e => removeLabel(e)}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick={deleteMessage.bind(this, messages)}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
}

export default Toolbar
