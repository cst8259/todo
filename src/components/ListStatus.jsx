function ListStatus ({items}) {
  const count = items.filter(item => !item.complete).length
  return (<p>Incomplete Items: {count}</p>)
}

export default ListStatus