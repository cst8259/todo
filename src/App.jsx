import ListGroup from './components/ListGroup.jsx'
import ListItem from './components/ListItem.jsx'
import ListStatus from './components/ListStatus.jsx'
import AddForm from './components/AddForm.jsx'

function App() {
  const items = [
    { id: 1, task: 'Buy Milk', complete: false },
    { id: 2, task: 'Feed Cat', complete: true },
    { id: 3, task: 'Clean Room', complete: false }
  ]

  return (
    <main className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <h1 className="display-4 text-center p-5">ToDo List</h1>
          <AddForm />
          <ListStatus items={items} />
          <ListGroup>
            {items.map(item => <ListItem key={item.id} item={item} />)}
          </ListGroup>
        </div>
      </div>
      
    </main>
  )
}

export default App
