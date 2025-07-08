function ListItem ({ item }) {
  return (
    <li className="list-group-item">
      <input type="checkbox" 
             className="form-check-input me-2" 
             id={`list-item-${item.id}`} />
      <label className="form-check-label" htmlFor={`list-item-${item.id}`}>
        {item.task}
      </label>
    </li>
  )
}

export default ListItem